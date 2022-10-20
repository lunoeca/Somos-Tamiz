function chequeo() {

    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var error = document.getElementById('error');
    
    var mensajesError = [];
    console.log('formulario'); 
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

    return false;
}

