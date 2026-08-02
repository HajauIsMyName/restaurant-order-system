from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect


def login_view(request):
    """
    Xử lý chức năng đăng nhập.

    - GET: Hiển thị trang đăng nhập.
    - POST: Xác thực tài khoản và tạo phiên đăng nhập.
    - Nếu người dùng đã đăng nhập, chuyển hướng về trang chủ.
    """

    # Nếu người dùng đã đăng nhập thì chuyển về trang chủ
    if request.user.is_authenticated:
        return redirect("/")

    # Xử lí khi người dùng gửi form đăng nhập
    if request.method == "POST":
        # Lấy thông tin đăng nhập từ form
        username = request.POST.get("username")
        password = request.POST.get("password")

        # Xác thực thông tin đăng nhập
        user = authenticate(request, username=username, password=password)

        # Nếu xác thực thành công thì đăng nhập và chuyển về trang chủ
        if user is not None:
            login(request, user)
            return redirect("/")

        # Nếu đăng nhập thất bại thì hiển thị lại trang login kèm thông báo lỗi
        return render(
            request,
            "accounts/login.html",
            {"error": "Tên đăng nhập hoặc mật khẩu không đúng."},
        )

    # Hiển thị trang đăng nhập khi truy cập bằng phương thức GET
    return render(request, "accounts/login.html")


def logout_view(request):
    logout(request)
    return redirect("/login")
