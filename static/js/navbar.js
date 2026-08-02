document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".navbar-custom__menu-item");
  const navbarCollapse = document.getElementById("navbarH2T");

  // Tự động thu gọn menu 3 gạch khi click chọn mục trên mobile
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (window.innerWidth < 992 && navbarCollapse) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
});
