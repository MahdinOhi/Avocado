from django import forms
from .models import CustomUser

class CustomUserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'dateOfBirth', 'profession']  # ✅ Fixed field name

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password'])  # Password hashing
        # ✅ Removed manual userId generation - it's handled by default in model
        if commit:
            user.save()
        return user