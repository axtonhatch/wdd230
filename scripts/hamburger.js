// JavaScript for toggling the mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuItems = document.getElementById("menu-items");

    menuToggle.addEventListener("click", function () {
        menuItems.classList.toggle("show-menu");
    });
});


// JavaScript for toggling dark mode
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});