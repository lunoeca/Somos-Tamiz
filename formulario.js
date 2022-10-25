const options = {
     headers: {
          "Set-Cookie": "cross-site-cookie = whatever; SameSite = None; Secure"
     }
}

function chequeo() {
     var nombre = document.getElementById('nombre');
     var correo = document.getElementById('correo');
     var error = document.getElementById('error');
     var n = true; 
     var c = true; 
     var mensajesError = [];
     console.log('formulario'); 
     if (nombre.value === null || nombre.value === '') {
          mensajesError.push('Ingresa tu nombre');
          console.log('nombre null '); 
          n = false; 
     } 
     if (correo.value === null || correo.value === '') {
          mensajesError.push('Ingresa tu email');
          console.log('email  null'); 
          c = false; 
     }
     if ((correo.value != null || correo.value != '') && !(correo.value.includes('@'))){
          mensajesError.push('Corrige tu email');    
          console.log(correo.value); 
          c = false; 
     }

     error.innerHTML = mensajesError.join('<br>');
     
     if (!(c && n )) {
          return false; 
     } else return true; 
}

