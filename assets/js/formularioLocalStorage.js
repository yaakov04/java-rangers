//Datos personales
function guardarDatos(){
    localStorage.DrName = document.getElementById("formularioDrName").value;
    localStorage.DrEspecialidad = document.getElementById("formularioDrEspecialidad").value;
    localStorage.DrCedula = document.getElementById("formularioDrCedula").value;
    localStorage.DrCedulaEspecial = document.getElementById("formularioDrCedulaEspecial").value;
    localStorage.DrFoto = document.getElementById("formularioDrFoto").value;
}
document.getElementById("botonFormulario1").addEventListener("click", guardarDatos);

//Educación
function guardarDatos2(){
    localStorage.DrUni = document.getElementById("formularioDrUni").value;
    localStorage.DrUniEspecialidad = document.getElementById("formularioDrUniEspecialidad").value;
}
document.getElementById("botonFormulario2").addEventListener("click", guardarDatos2);

//Descripcion
function guardarDatos3(){
    localStorage.DrDescripcion = document.getElementById("formularioDrDescripcion").value;
}
document.getElementById("botonFormulario3").addEventListener("click", guardarDatos3);

//Principales enfermedades que trata
function guardarDatos4(){
    localStorage.DrEnfermedad1 = document.getElementById("formularioDrEnfermedad1").value;
    localStorage.DrEnfermedad2 = document.getElementById("formularioDrEnfermedad2").value;
    localStorage.DrEnfermedad3 = document.getElementById("formularioDrEnfermedad3").value;
    localStorage.DrEnfermedad4 = document.getElementById("formularioDrEnfermedad4").value;
}
document.getElementById("botonFormulario4").addEventListener("click", guardarDatos4);

//Datos personales
function guardarDatos5(){
    localStorage.DrPhone = document.getElementById("formularioDrPhone").value;
    localStorage.DrWebPage = document.getElementById("formularioDrWebPage").value;
    localStorage.DrCorreo = document.getElementById("formularioDrCorreo").value;
    localStorage.DrDireccion = document.getElementById("formularioDrDireccion").value;
    localStorage.DrFacebook = document.getElementById("formularioDrFacebook").value;
    localStorage.DrInstagram = document.getElementById("formularioDrInstagram").value;
    localStorage.DrWhatsapp = document.getElementById("formularioDrWhatsapp").value;
}
document.getElementById("botonFormulario5").addEventListener("click", guardarDatos5);


