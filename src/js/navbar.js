document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split("/").pop(); // Obtiene el nombre del archivo actual

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); // Añadir clase activa al enlace correspondiente
            const indicator = document.querySelector('.page-indicator');
            indicator.textContent = link.textContent; // Cambiar el texto del indicador de página
        }
    });
});
