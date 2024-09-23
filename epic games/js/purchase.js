document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.getElementById('buy-btn');
    const modal = document.getElementById('purchase-modal');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('purchase-form');
    const formMessage = document.getElementById('form-message');
    const thankYouMessage = document.getElementById('thank-you-message');
    const gameTitle = document.querySelector('.product-details h1').textContent;
    const buyBtnText = buyBtn.textContent;

    // Verificar si el juego ya está en la biblioteca
    if (isGamePurchased(gameTitle)) {
        buyBtn.textContent = 'Ya comprado';
        buyBtn.disabled = true;
        buyBtn.style.backgroundColor = '#6c757d'; // Color gris para botón deshabilitado
    }

    // Abre el modal de compra
    buyBtn.addEventListener('click', () => {
        if (buyBtn.textContent === 'Comprar ahora') {
            modal.style.display = 'block';
        } else if (buyBtn.textContent === 'Ya comprado') {
            alert('Ya compraste el juego.');
            window.location.href = '../library.html'; // Redirige a la biblioteca
        }
    });

    // Cierra el modal de compra
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Envía el formulario y muestra el mensaje de agradecimiento
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        modal.style.display = 'none';
        formMessage.style.display = 'block';
        thankYouMessage.style.display = 'block';
        setTimeout(() => {
            thankYouMessage.style.display = 'none';
            window.location.href = '../library.html'; // Redirige a la biblioteca
        }, 3000); // Muestra el mensaje por 3 segundos antes de redirigir
        // Agrega el juego a la biblioteca
        addGameToLibrary(gameTitle);
        buyBtn.textContent = 'Ya comprado';
        buyBtn.disabled = true;
        buyBtn.style.backgroundColor = '#6c757d'; // Color gris para botón deshabilitado
    });

    function addGameToLibrary(title) {
        let library = JSON.parse(localStorage.getItem('library')) || [];
        if (!library.includes(title)) {
            library.push(title);
            localStorage.setItem('library', JSON.stringify(library));
        }
    }

    function isGamePurchased(title) {
        let library = JSON.parse(localStorage.getItem('library')) || [];
        return library.includes(title);
    }
});
