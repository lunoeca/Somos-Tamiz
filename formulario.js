var nombre = document.getElementById('nombre');
var correo = document.getElementById('correo');
var error = document.getElementById('error');
error.style.color = 'red';



var form = document.getElementById('formulario');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var mensajesError = [];
    if (nombre.value === null || nombre.value === '') {
        mensajesError.push('Ingresa tu nombre');
    }
    if (correo.value === null || correo.value === '') {
        mensajesError.push('Ingresa tu email');
    }
    if (!correo.value.includes('@')) {
        mensajesError.push('Corrige tu email');
    }

    error.innerHTML = mensajesError.join(', ');
}); 
