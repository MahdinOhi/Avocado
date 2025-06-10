from django.contrib import admin
from django.urls import path, include
from .views import welcome_backend  # import your view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('users/', include('users.urls')),
    # add welcome page here
    path('', welcome_backend, name='welcome-backend'),
]
