class Doctor {
    id;
    img;
    name; 
    city; 
    rating; 
    especialidad; 
    descripcion;
    cedula;
    cedulaEspecial;
    universidad;
    universidadEspecialidad;
    enfermedad = [];
    phone;
    webPage;
    correo;
    facebook;
    instagram;
    whatsapp;

    constructor (){
        this.id = Math.random().toString(36).substr(2);
    }

    //Datos personales
    guardarDatosPersonales(){
        this.name = document.getElementById("formularioDrName").value;
        this.especialidad = document.getElementById("formularioDrEspecialidad").value;
        this.cedula = document.getElementById("formularioDrCedula").value;
        this.cedulaEspecial = document.getElementById("formularioDrCedulaEspecial").value;
        this.img = document.getElementById("formularioDrFoto").value;
    }

    //Educación
    guardarDatosEducacion(){
        this.universidad = document.getElementById("formularioDrUni").value;
        this.universidadEspecialidad = document.getElementById("formularioDrUniEspecialidad").value;
        
    }

    //Descripcion
    guardarDatosDescripcion(){
        this.descripcion = document.getElementById("formularioDrDescripcion").value;
        
    }

    //Principales enfermedades que trata
    guardarDatosEnfermedades(){
        this.enfermedad[0] = document.getElementById("formularioDrEnfermedad1").value;
        this.enfermedad[1] = document.getElementById("formularioDrEnfermedad2").value;
        this.enfermedad[2] = document.getElementById("formularioDrEnfermedad3").value;
        this.enfermedad[3] = document.getElementById("formularioDrEnfermedad4").value;
        
    }

    //Datos personales
    guardarDatosPersonales(){
        this.phone = document.getElementById("formularioDrPhone").value;
        this.webPage = document.getElementById("formularioDrWebPage").value;
        this.correo = document.getElementById("formularioDrCorreo").value;
        this.city = document.getElementById("formularioDrDireccion").value;
        this.facebook = document.getElementById("formularioDrFacebook").value;
        this.instagram = document.getElementById("formularioDrInstagram").value;
        this.whatsapp = document.getElementById("formularioDrWhatsapp").value;
        
    }

}

 //Funcion para guardar el array de personas
 const saveOnLocalStorage = function(arr){
    localStorage.setItem('doctores', JSON.stringify(arr));
    console.log(localStorage)

}

//Funcion para obtener datos de localStorage
const getDoctorsFromLocalStorage = function(){
    const doctores = localStorage.getItem('doctores');
    if (doctores != null) {
        //Si existen regresamos lo que hay en localStorage
        return JSON.parse(doctores);
    }
    //Si no existe regresamos un array vacio
    return [];
}

//Agrega el doctor al array o modifica un doctor existente
const addDoctor = function(arrDoc, doctor){
    const find = arrDoc.find(doc => doc.id === doctor.id)

    //Si existe
    if (find) {
        arrDoc = arrDoc.map(doc =>{
            if (doc.id === doctor.id) {
                return doctor;
            }
            return doc;
        });
    }
    //Si no existe
    arrDoc.push(doctor);
}

// array de doctores
const doctores = getDoctorsFromLocalStorage();

// objeto de tipo doctor
const doctor = new Doctor();


document.getElementById("botonFormulario1").addEventListener("click", (e) => {
    e.preventDefault();
    doctor.guardarDatosPersonales();
    console.log(doctor)
    addDoctor(doctores, doctor)
    saveOnLocalStorage(doctores)
});


document.getElementById("botonFormulario2").addEventListener("click", (e) => {
    e.preventDefault();
    doctor.guardarDatosEducacion()
    addDoctor(doctores, doctor)
    saveOnLocalStorage(doctores)
});


document.getElementById("botonFormulario3").addEventListener("click", (e) => {
    e.preventDefault();
    doctor.guardarDatosDescripcion()
    addDoctor(doctores, doctor)
    saveOnLocalStorage(doctores)
});


document.getElementById("botonFormulario4").addEventListener("click", (e) => {
    e.preventDefault();
    doctor.guardarDatosEnfermedades()
    addDoctor(doctores, doctor)
    saveOnLocalStorage(doctores)
});


document.getElementById("botonFormulario5").addEventListener("click", (e) => {
    e.preventDefault();
    doctor.guardarDatosPersonales()
    addDoctor(doctores, doctor)
    saveOnLocalStorage(doctores)
});

