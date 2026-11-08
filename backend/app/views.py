from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.models import Token
from .serializers import UserLoginSerializer, UserRegisterSerializer, ToDoSerializer, CompletedToDoListSerializer, \
    GetUserSerializer
from rest_framework.exceptions import ValidationError, PermissionDenied, AuthenticationFailed
from.models import ToDo, CompletedToDoList


@api_view(['POST'])
def create_user(request):
    serializer = UserRegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token = Token.objects.create(user=user)
        return Response({
            'data': {
                'token': token.key,
                'user': {
                    'id': user.id,
                    'email': user.email,
                    'login': user.login,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'is_staff': user.is_staff
                }
            }
        }, status=status.HTTP_201_CREATED)
    raise ValidationError(serializer.errors)


@api_view(['POST'])
def login_user(request):
    serializer = UserLoginSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.validated_data
        if not user:
            raise AuthenticationFailed
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'data': {
                'token': token.key,
                'user': {
                    'id': user.id,
                    'email': user.email,
                    'login': user.login,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'is_staff': user.is_staff
                }
            }
        }, status=status.HTTP_200_OK)
    raise ValidationError(serializer.errors)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    request.user.auth_token.delete()
    return Response({
        'message': 'success',
        'data': None,
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_me(request):
    user = request.user
    serializer = GetUserSerializer(user)
    return Response({
        'user': {
            'email': user.email,
            'login': user.login,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'is_staff': user.is_staff,
        }
    }, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def list_create_todo(request):
    if request.method == 'GET':
        todos = ToDo.objects.filter(user=request.user)
        serializer = ToDoSerializer(todos, many=True)
        return Response({
            'data': serializer.data
        }, status=status.HTTP_200_OK)
    if request.method == 'POST':
        serializer = ToDoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        raise ValidationError(serializer.errors)
    return None


@api_view(['PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
def todo_change(request, id):
    todo = get_object_or_404(ToDo, id=id, user=request.user)
    if request.method == 'PATCH':
        serializer = ToDoSerializer(todo, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'data': serializer.data
            }, status=status.HTTP_200_OK)
        raise ValidationError(serializer.errors)
    if request.method == 'DELETE':
        todo.delete()
        return Response({
            'message': 'success',
            'data': None
        }, status=status.HTTP_200_OK)
    return None


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_to_completed(request, id):
    todo = get_object_or_404(ToDo, id=id, user=request.user)
    if todo.date_of_end is not None:
        return Response(
            {'error': 'This todo is already completed'},
            status=status.HTTP_400_BAD_REQUEST
        )
    completed_todo = CompletedToDoList.objects.create(todo=todo, user=request.user)
    serializer = CompletedToDoListSerializer(completed_todo)
    return Response(
        {'data': serializer.data, 'message': 'Успешно добалвенно в completed'},
        status=status.HTTP_201_CREATED
    )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def completed_list(request):
    completed_todos = CompletedToDoList.objects.filter(user=request.user)
    serializer = CompletedToDoListSerializer(completed_todos, many=True)
    return Response({
        'data': serializer.data,
    }, status=status.HTTP_200_OK)
