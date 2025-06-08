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
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, username, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = [
        ('user', 'User'),
        ('admin', 'Admin'),
        ('superadmin', 'Superadmin'),
        
    ]

    userId = models.CharField(max_length=50, unique=True, editable=False)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    passwordHash = models.CharField(max_length=255)  # Not used directly (Django uses password field internally)
    createdAt = models.DateTimeField(default=timezone.now)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='user')
    isVerified = models.BooleanField(default=False)
    resetToken = models.CharField(max_length=255, blank=True, null=True)
    sessionTokens = models.JSONField(default=list, blank=True)  # list of tokens
    autosave = models.BooleanField(default=True)
    noteCount = models.PositiveIntegerField(default=0)
    taskCount = models.PositiveIntegerField(default=0)
    activityLog = models.JSONField(default=list, blank=True)  # list of dicts
    notes = models.JSONField(default=dict, blank=True)  # {documents: [{...}]}

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    # Auth Functions
    def auth(self, password: str) -> bool:
        """Validate given password"""
        return self.check_password(password)

    def logout(self, session_token: str) -> bool:
        """Remove token from sessionTokens array"""
        if session_token in self.sessionTokens:
            self.sessionTokens.remove(session_token)
            self.save()
            return True
        return False

    def updateSettings(self, **kwargs) -> bool:
        """Apply user preference updates (like theme, autosave)"""
        allowed_fields = {'autosave', 'noteCount', 'taskCount', 'activityLog', 'notes'}
        changed = False
        for key, value in kwargs.items():
            if key in allowed_fields:
                setattr(self, key, value)
                changed = True
        if changed:
            self.save()
        return changed
