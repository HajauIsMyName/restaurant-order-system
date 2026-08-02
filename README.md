# 🍽️ Restaurant Order System

Một hệ thống quản lý và gọi món dành cho **nhà hàng** và **quán cà phê**, được xây dựng bằng **Django**. Dự án hướng đến việc hỗ trợ nhân viên tạo đơn hàng nhanh chóng, quản lý thực đơn và theo dõi trạng thái đơn hàng trong thời gian thực.

---

# ✨ Tính năng

## 👨‍💼 Quản trị viên (Admin)
- Quản lý tài khoản nhân viên.
- Quản lý thực đơn (Thêm, sửa, xóa món ăn và đồ uống).
- Quản lý danh mục món ăn.
- Theo dõi và quản lý đơn hàng.
- Quản lý trạng thái đơn hàng.
- Xem thống kê và doanh thu.
- Truy cập trang quản trị Django.

## 👨‍🍳 Nhân viên (Staff)
- Đăng nhập hệ thống.
- Tạo đơn hàng cho khách.
- Cập nhật trạng thái đơn hàng theo quyền được cấp.
- Xem danh sách đơn hàng.

---

# 🚀 Hướng dẫn cài đặt

## 1. Clone dự án

```bash
git clone https://github.com/HajauIsMyName/restaurant-order-system.git
````

## 2. Di chuyển vào thư mục dự án

```bash
cd restaurant-order-system
```

## 3. Tạo môi trường ảo (Khuyến khích)

### Windows

```bash
python -m venv venv
```

### macOS / Linux

```bash
python3 -m venv venv
```

---

## 4. Kích hoạt môi trường ảo

### Windows (Command Prompt)

```bash
venv\Scripts\activate.bat
```

### Windows (PowerShell)

```powershell
venv\Scripts\Activate.ps1
```

### macOS / Linux

```bash
source venv/bin/activate
```

---

## 5. Cài đặt thư viện

```bash
pip install -r requirements.txt
```

---

## 6. Chạy Migration

```bash
python manage.py migrate
```

---

## 7. Tạo tài khoản Admin (Tùy chọn)

```bash
python manage.py createsuperuser
```

---

## 8. Khởi động máy chủ

```bash
python manage.py runserver
```

---

## 9. Truy cập hệ thống

Mở trình duyệt và truy cập:

```
http://127.0.0.1:8000/
```

Trang quản trị:

```
http://127.0.0.1:8000/admin/
```

---

# 📁 Cấu trúc dự án

```text
restaurant-order-system/
│
├── apps/               # Các ứng dụng của dự án
├── config/             # Cấu hình Django (settings, urls, wsgi, asgi)
├── static/             # CSS, JavaScript, hình ảnh
├── templates/          # Giao diện HTML
├── media/              # File người dùng tải lên (nếu có)
├── requirements.txt    # Danh sách thư viện
├── manage.py           # Công cụ quản lý Django
└── README.md
```

---

# 📌 Quy trình phát triển

1. Clone dự án.
2. Tạo môi trường ảo.
3. Cài đặt thư viện.
4. Chạy Migration.
5. Tạo tài khoản Admin.
6. Chạy máy chủ.
7. Bắt đầu phát triển tính năng.

---

# 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh.

1. Fork repository.
2. Tạo một nhánh mới.

```bash
git checkout -b feature/your-feature
```

3. Commit thay đổi.

```bash
git commit -m "feat: add new feature"
```

4. Push lên GitHub.

```bash
git push origin feature/your-feature
```

5. Tạo Pull Request.