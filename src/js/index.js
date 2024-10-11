document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.gallery img');
    let currentIndex = 0;

    function showNextImage() {
        // Oculta la imagen actual
        images[currentIndex].classList.remove('active');

        // Incrementa el índice para mostrar la siguiente imagen
        currentIndex = (currentIndex + 1) % images.length;

        // Muestra la nueva imagen
        images[currentIndex].classList.add('active');
    }

    // Cambia la imagen cada 3 segundos
    setInterval(showNextImage, 3000);
});
