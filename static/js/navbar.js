document.addEventListener("DOMContentLoaded", function () {
  const togglerBtn = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.getElementById("navbarH2T");

  // 1. Xử lý mở / đóng Tab Overlay trên Mobile bằng nút 3 gạch
  if (togglerBtn && navbarCollapse) {
    togglerBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navbarCollapse.classList.toggle("show");
    });
  }

  // 2. Xử lý mở / đóng Dropdown Username
  const userBtn = document.getElementById("userDropdownBtn");
  const userMenu = document.getElementById("userDropdownMenu");

  if (userBtn && userMenu) {
    userBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      userMenu.classList.toggle("show");
    });
  }

  // 3. Tự đóng khi click ra ngoài màn hình
  document.addEventListener("click", function (e) {
    if (
      userBtn &&
      userMenu &&
      !userBtn.contains(e.target) &&
      !userMenu.contains(e.target)
    ) {
      userMenu.classList.remove("show");
    }

    if (
      navbarCollapse &&
      togglerBtn &&
      !navbarCollapse.contains(e.target) &&
      !togglerBtn.contains(e.target)
    ) {
      navbarCollapse.classList.remove("show");
    }
  });

  // 4. Xử lý đổi active và tự đóng Overlay khi chọn mục menu
  const menuItems = document.querySelectorAll(".navbar-custom__menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") {
        e.preventDefault();
      }

      menuItems.forEach((i) =>
        i.classList.remove("navbar-custom__menu-item--active"),
      );
      this.classList.add("navbar-custom__menu-item--active");

      if (window.innerWidth < 992 && navbarCollapse) {
        navbarCollapse.classList.remove("show");
      }
    });
  });
});
