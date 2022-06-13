import getDoctorsFromLocalStorage from "./libs/getDoctorsFromLocalStorage.js";

var doctores = getDoctorsFromLocalStorage();

function loginDoc(e) {
 
    let correo = document.getElementById('correo').value; 
    let password = document.getElementById('password').value; 

    const doctor = doctores.find(doctor => doctor.correo === correo);

    if (doctor){
        console.log(doctor);
    } else {
        console.log("no existe usuario", doctor);
    }
}

const btnLoginDoc = document.getElementById('btn-login-doc');
document.addEventListener("click",(e)=>{
    if(e.target.id === 'btn-login-doc'){
        e.preventDefault();
        
        //loginDoc(e);
    }
});

