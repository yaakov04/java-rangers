import Doctor from "./model/Doctor.js";

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

