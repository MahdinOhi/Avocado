from django.urls import path
from .views import home, login_form, ProtectedView, SignupView, success_view
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    
    # JWT login and token refresh endpoints
    path('auth/jwt/create/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/jwt/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('', home, name='home'), 
    path('login/', login_form, name='login'),
    path('signup/', SignupView.as_view(), name='signup'),
    path('protected/', ProtectedView.as_view(), name='protected'),
    path('success/', success_view, name='success'),
    ]
