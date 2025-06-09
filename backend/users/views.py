from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from rest_framework import status
from .serializers import RegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import CustomUserForm
from django.views import View


class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "msg": "You're authenticated!",
            "user": str(request.user)
        })


def home(request):
    return HttpResponse("Welcome to the User Home Page")


def login_form(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('success')  # name of your success URL pattern
        else:
            return render(request, 'users/login.html', {'error': 'Invalid credentials'})
    return render(request, 'users/login.html')


class SignupView(View):
    def get(self, request):
        return render(request, 'users/signup.html')

    def post(self, request):
        form = CustomUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')  # Redirect to a success page or login
        return render(request, 'users/signup.html', {'form': form})


def success_view(request):
    return render(request, 'users/success.html', {
        'message': 'Login or Signup Successful!',
        'user': request.user
    })
