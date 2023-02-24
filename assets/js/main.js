document.addEventListener("DOMContentLoaded", function () {

    // Obtener el elemento por su ID
    const headerNav = document.getElementById("header-nav");

    window.onscroll = function (e) {

        if (window.scrollY > 1) {
            headerNav.classList.add("header-activo");
        } else {
            headerNav.classList.remove("header-activo");
        }
    }

});