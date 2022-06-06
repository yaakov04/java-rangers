import Doctor from "./model/Doctor.js";
import getDoctorsFromLocalStorage from "./libs/getDoctorsFromLocalStorage.js";
import saveOnLocalStorage from "./libs/saveOnLocalStorage.js";
import addDoctor from "./libs/addDoctor.js";

// array de doctores
const doctores = getDoctorsFromLocalStorage();

// objeto de tipo doctor
const doctor = new Doctor();


document.getElementById("botonFormulario1").addEventListener("click", (e) => {
    e.preventDefault();
    doctor.guardarDatosPersonales();
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
    doctor.guardarDatosContacto()
    addDoctor(doctores, doctor)
    saveOnLocalStorage(doctores)
});

document.getElementById("botonFormulario6").addEventListener("click", (e) => {
    e.preventDefault();
    doctor.guardarGaleria()
    addDoctor(doctores, doctor)
    saveOnLocalStorage(doctores)
});

