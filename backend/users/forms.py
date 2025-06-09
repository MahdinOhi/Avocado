from django import forms
from .models import CustomUser

class CustomUserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password']

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password'])  # Password hashing
        user.userId = self.generate_user_id()  # Set unique userId manually
        if commit:
            user.save()
        return user

    def generate_user_id(self):
        import uuid
        return str(uuid.uuid4()) 