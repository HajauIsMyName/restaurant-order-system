from django.shortcuts import render, redirect

def home_view(request):
    """
    Hiển thị trang chủ.

    - Nếu người dùng chưa đăng nhập, chuyển hướng về trang đăng nhập.
    - Nếu người dùng đã đăng nhập, hiển thị trang chủ.
    """
    if not request.user.is_authenticated:
        return redirect("login")

    return render(request, "home/index.html")