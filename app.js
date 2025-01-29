window.addEventListener('DOMContentLoaded', () => {
    const botonSaludo = document.getElementById('botonSaludo');
    const titulo = document.getElementById('titulo');
  
    botonSaludo.addEventListener('click', () => {
      titulo.textContent = '¡Hola Mundo!';
    });
  });