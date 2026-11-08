from rest_framework import serializers
from .models import CustomUser, ToDo, CompletedToDoList
from rest_framework.authentication import authenticate


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'login', 'first_name', 'last_name', 'password')

    def save(self, **kwargs):
        user = CustomUser(
            email=self.validated_data['email'],
            login=self.validated_data['login'],
            first_name=self.validated_data['first_name'],
            last_name=self.validated_data['last_name'],
        )
        user.set_password(self.validated_data['password'])
        user.save()
        return user


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, attrs):
        user = authenticate(**attrs)
        if user:
            return user
        return False


class GetUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'login', 'first_name', 'last_name']


class ToDoSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    class Meta:
        model = ToDo
        fields = ('id', 'title', 'description', 'date_of_completion', 'date_of_creation', 'date_of_end', 'priority', 'user')
        read_only_fields = ('user',)

    def get_user(self, obj):
        return obj.user.email


class CompletedToDoListSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='todo.id')
    title = serializers.CharField(source='todo.title')
    description = serializers.CharField(source='todo.description')
    date_of_completion = serializers.DateField(source='todo.date_of_completion')
    date_of_creation = serializers.DateField(source='todo.date_of_creation')
    date_of_end = serializers.DateField(source='todo.date_of_end')
    priority = serializers.BooleanField(source='todo.priority')
    user = serializers.CharField(source='todo.user.email')

    class Meta:
        model = CompletedToDoList
        fields = ('id', 'title', 'description', 'date_of_completion',
                 'date_of_creation', 'date_of_end', 'priority', 'user')
