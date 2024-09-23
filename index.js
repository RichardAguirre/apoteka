const botonCambioColor = document.getElementById('boton-cambio-color');

botonCambioColor.addEventListener('click', () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'white' ? '#B2DFDB' : 'white';
});
