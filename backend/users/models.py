import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")
        if not username:
            raise ValueError("Username is required")

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('role', 'superadmin')
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)  # ✅ Added missing is_staff
        return self.create_user(email, username, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = [
        ('user', 'User'),
        ('admin', 'Admin'),
        ('superadmin', 'Superadmin'),
    ]

    PROFESSION_CHOICES = [
        ('student', 'Student'),
        ('researcher', 'Researcher'),
        ('professional', 'Professional'),
    ]

    userId = models.CharField(max_length=50, unique=True, editable=False, default=uuid.uuid4)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)

    # ✅ Fixed field name to match form and admin
    dateOfBirth = models.DateField(null=True, blank=True)
    profession = models.CharField(max_length=20, choices=PROFESSION_CHOICES, default='student')

    createdAt = models.DateTimeField(default=timezone.now)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='user')
    isVerified = models.BooleanField(default=False)
    resetToken = models.CharField(max_length=255, blank=True, null=True)
    sessionTokens = models.JSONField(default=list, blank=True)
    autosave = models.BooleanField(default=True)
    noteCount = models.PositiveIntegerField(default=0)
    taskCount = models.PositiveIntegerField(default=0)
    activityLog = models.JSONField(default=list, blank=True)
    notes = models.JSONField(default=dict, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # ✅ Added missing is_staff field
    # ✅ Removed duplicate is_verified field (already have isVerified)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username

    def auth(self, password: str) -> bool:
        return self.check_password(password)

    def logout(self, session_token: str) -> bool:
        if session_token in self.sessionTokens:
            self.sessionTokens.remove(session_token)
            self.save()
            return True
        return False

    def updateSettings(self, **kwargs) -> bool:
        allowed_fields = {'autosave', 'noteCount', 'taskCount', 'activityLog', 'notes'}
        changed = False
        for key, value in kwargs.items():
            if key in allowed_fields:
                setattr(self, key, value)
                changed = True
        if changed:
            self.save()
        return changed