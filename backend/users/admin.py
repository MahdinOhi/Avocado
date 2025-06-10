from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser

class CustomUserAdmin(BaseUserAdmin):
    model = CustomUser
    list_display = ('username', 'email', 'role', 'is_active', 'dateOfBirth', 'profession')  # ✅ Fixed field name
    list_filter = ('role', 'is_active', 'profession')  # ✅ Added profession filter
    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        ('Personal Info', {'fields': ('dateOfBirth', 'profession')}),  # ✅ Added new section
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),  # ✅ Added is_staff
        ('User Info', {'fields': ('role', 'isVerified')}),  # ✅ Fixed field name
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'role', 'isVerified', 'dateOfBirth', 'profession', 'is_active')  # ✅ Fixed missing comma and field names
        }),
    )
    search_fields = ('email', 'username')
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)


# serializers.py (Fixed filename)
from rest_framework import serializers
from .models import CustomUser

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'dateOfBirth', 'profession']  # ✅ Added new fields
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()
        return user