from django.contrib import admin
from .models import ToDo, CustomUser, CompletedToDoList

admin.site.register(ToDo)
admin.site.register(CustomUser)
admin.site.register(CompletedToDoList)