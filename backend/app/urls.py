from django.urls import path
from .views import create_user, login_user, logout, list_create_todo, add_to_completed, completed_list, todo_change, get_me

urlpatterns = [
    path('login', login_user),
    path('signup', create_user),
    path('logout', logout),
    path('me', get_me),

    path('todos', list_create_todo),
    path('todos/<int:id>', todo_change),

    path('completed', completed_list),
    path('todos/<int:id>/completed', add_to_completed)
]