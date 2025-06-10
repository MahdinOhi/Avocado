# api/views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken


class LoginView(APIView):
    # Allow any user to access this view (i.e., unauthenticated)
    permission_classes = []

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        # Use Django's built-in authenticate function
        # Note: If your users log in with email, you might need a custom authentication backend
        # that allows authenticating by email instead of username.
        # For simplicity here, we'll assume username is email or adjust accordingly.
        # For default Django User model, 'username' is the field for authentication.
        # You might need to map 'email' from React to 'username' for default authenticate.
        # A better approach for email login is a custom authentication backend.

        # For this example, let's assume username is the email for authentication.
        user = authenticate(request, username=email, password=password)

        if user is not None:
            # User is authenticated, generate JWT tokens
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh),
                'message': 'Login successful!'
            }, status=status.HTTP_200_OK)
        else:
            # Authentication failed
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
