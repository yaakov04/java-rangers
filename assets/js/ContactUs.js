
//*Validación del formulario de Contact Us
const btnEnviar = document.getElementById('botonFormulario');
const validación = (e) => {
  e.preventDefault();
  
  const emailDelSolicitante = document.getElementById('formEmail');
  const telefonoDelSolicitante = document.getElementById('formPhone');
  
  //Validacion de espacios vacíos
  if (formName.value === "") {
    alert("Por favor, escribe tu nombre");
    formName.focus();
    return false;
    }
  if (formEmail.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    formEmail.focus();
    return false;
    }
  if (formText.value === "") {
    alert("Por favor, escribe tu mensaje");
    formText.focus();
    return false;
    }

    //Evalua si el telefono es válido
  if (!telefonoValido(formPhone.value)) {
    alert("Por favor, escribe un teléfono válido");
    telefonoDelSolicitante.focus();
    return false;
    }
    //Evalua si el email es valido
    if (!emailValido(formEmail.value)) {
    alert("Por favor, escribe un correo electrónico válido");
     emailDelSolicitante.focus();
     return false;
    }
return true; //Si todo se valida, se pueden enviar los datos del formulario al servidor
}//Terminan Validaciones


//*Condiciones para que sean válidos

//valida si hay 2 '@' y marca como invalido el correo
const emailValido = emailDelSolicitante => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailDelSolicitante);
}

//Valida si el teléfono es un número
const telefonoValido = telefonoDelSolicitante => {
return /[0-9]$/.test(telefonoDelSolicitante);
}

//Se ejecuta todo lo anterior al dar click en enviar formulario.
botonFormulario.addEventListener('click', validación);