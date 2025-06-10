# api/urls.py
from django.urls import path
from .views import LoginView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # Custom login view
    path('login/', LoginView.as_view(), name='login'),

    # Simple JWT's built-in views for token obtaining and refreshing
    # These views are generally preferred for robust JWT authentication
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
