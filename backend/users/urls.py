from django.urls import path
from .views import home, custom_login, ProtectedView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', home, name='home'),                     # Root shows nothing
    path('login/', custom_login, name='custom_login'), # POST login endpoint
    path('protected/', ProtectedView.as_view(), name='protected'),
]
