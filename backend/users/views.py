from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


def home(request):
    return JsonResponse({"message": "Welcome to the Avocado API."})


@api_view(['POST'])
def custom_login(request):
    serializer = TokenObtainPairSerializer(data=request.data)
    try:
        serializer.is_valid(raise_exception=True)
        return JsonResponse({
            "message": "Login successful",
            "access": serializer.validated_data["access"],
            "refresh": serializer.validated_data["refresh"]
        }, status=200)
    except Exception as e:
        return JsonResponse({"message": "Login failed", "details": str(e)}, status=401)

    