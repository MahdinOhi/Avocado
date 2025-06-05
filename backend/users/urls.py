from django.urls import path
from .views import home, custom_login

urlpatterns = [
    path('', home, name='home'),                     # Root shows nothing
    path('login/', custom_login, name='custom_login')  # POST login endpoint
]
