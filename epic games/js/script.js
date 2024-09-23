let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Función para cambiar de diapositiva
function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    
    // Cambio de diapositiva
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
}

// Cambiar slide automáticamente cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);

// Navegación manual
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
document.querySelector('.next').addEventListener('click', () => changeSlide(-1));


// Inicializar la primera diapositiva
slides[currentSlide].classList.add('active');
