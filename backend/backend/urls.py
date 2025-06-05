from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', include('users.urls')),  # This must point to a valid users/urls.py
]