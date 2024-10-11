// navbar.js

// Obtén la URL actual
const currentUrl = window.location.pathname;
const links = document.querySelectorAll('.nav-link');

// Recorre todos los enlaces de navegación
links.forEach(link => {
    // Comprueba si el href del enlace coincide con la URL actual
    if (link.href === window.location.href) {
        link.classList.add('active'); // Agrega la clase 'active' si coincide
    }
});
