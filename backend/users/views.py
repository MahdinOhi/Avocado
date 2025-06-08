from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required


class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"msg": "You're authenticated!", "user": str(request.user)})
    
    

def home(request):
    return HttpResponse("Welcome to the User Home Page")

def custom_login(request):
    return JsonResponse({"message": "Custom login works!"})
