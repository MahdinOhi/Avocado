from django.shortcuts import render


def welcome_backend(request):
    return render(request, "welcome.html")
