document.addEventListener('DOMContentLoaded', () => {
    const libraryContent = document.getElementById('library-content');
    const message = document.getElementById('message');

    // Función para cargar la biblioteca
    function loadLibrary() {
        const library = JSON.parse(localStorage.getItem('library')) || [];
        libraryContent.innerHTML = '';

        if (library.length === 0) {
            libraryContent.innerHTML = '<p>No tienes juegos en tu biblioteca.</p>';
            return;
        }

        library.forEach((game) => {
            const gameElement = document.createElement('div');
            gameElement.className = 'library-item';
            gameElement.innerHTML = `
                <span>${game}</span>
                <button data-game="${game}">Eliminar</button>
            `;
            libraryContent.appendChild(gameElement);
        });
    }

    // Función para eliminar un juego de la biblioteca
    function removeFromLibrary(gameTitle) {
        let library = JSON.parse(localStorage.getItem('library')) || [];
        library = library.filter(game => game !== gameTitle);
        localStorage.setItem('library', JSON.stringify(library));
    }

    // Manejar el clic en el botón de eliminar
    libraryContent.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const gameTitle = event.target.getAttribute('data-game');
            removeFromLibrary(gameTitle);
            message.textContent = `Has eliminado "${gameTitle}" de tu biblioteca.`;
            loadLibrary();
        }
    });

    // Inicializar la biblioteca
    loadLibrary();
});
