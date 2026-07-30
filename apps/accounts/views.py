from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect


def login_view(request):
    if request.user.is_authenticated:
        return redirect("/")

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect("/")

        return render(
            request,
            "accounts/login.html",
            {"error": "Tên đăng nhập hoặc mật khẩu không đúng."},
        )

    return render(request, "accounts/login.html")

def logout_view(request):
    logout(request)
    return redirect("/login")