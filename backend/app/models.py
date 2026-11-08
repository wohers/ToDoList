from django.utils import timezone
from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    login = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(unique=False, max_length=100)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['login', 'first_name', 'last_name', 'username']

    def __str__(self):
        return self.email


class ToDo(models.Model):
    title = models.CharField(max_length=120)
    description = models.CharField(max_length=1000, null=True, blank=True)
    date_of_completion = models.DateField(null=True, blank=True)
    date_of_creation = models.DateField(auto_now_add=True)
    date_of_end = models.DateField(null=True, blank=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    priority = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.email} - {self.title}'


class CompletedToDoList(models.Model):
    todo = models.ForeignKey(ToDo, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if not self.todo.date_of_end:
            self.todo.date_of_end = timezone.now().date()
            self.todo.save()

    def __str__(self):
        return str(self.todo)