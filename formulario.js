function chequeo() {

    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var error = document.getElementById('error');
    error.style.color = 'red';

    var mensajesError = [];
    if (nombre.value === null || nombre.value === '') {
        mensajesError.push('Ingresa tu nombre');
        return false;
    }
    if (correo.value === null || correo.value === '') {
        mensajesError.push('Ingresa tu email');
        return false;
    }
    if (!correo.value.includes('@')) {
        mensajesError.push('Corrige tu email');
        return false;
    }


    error.innerHTML = mensajesError.join(', ');

    return true;
}

