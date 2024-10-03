// script.js

// Función de búsqueda (solo demostrativa)
document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchQuery = document.querySelector('.search-bar input').value;
    alert('Buscando: ' + searchQuery);
});
