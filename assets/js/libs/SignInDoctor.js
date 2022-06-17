import Doctor from "../model/Doctor.js";
import getDoctorsFromLocalStorage from "./getDoctorsFromLocalStorage.js";
import addDoctor from "./addDoctor.js";
import saveOnLocalStorage from "./saveOnLocalStorage.js";

const sendSignIn = async (signIn) => {
    const url = `http://localhost:8080/api/usuario/signIn`;

    const config = {
        method: 'POST', // or 'PUT' 
        headers: { // se agrega el header
          'Content-Type': 'application/json', //tipo de contenido
        },
        body: JSON.stringify(signIn)
      }

    try {
        const respuesta = await fetch(url, config);
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.log("Fetch Error", error);
    }
}

const getValues = function(form){
    const nodeList = form.querySelectorAll('input'); // Regresa una lista de nodos
    const inputs = [... nodeList]; // lo convierto a un array

    //manejando el select
    const select = form.querySelector('select');
    
    const obj = {}; // inicializando el objeto que se va a guardar en localStorage
    let key = null; //inicializando variables auxiliares que van ayudar a llenar el objeto con sus atributos y propiedades
    let value = null;  //inicializando variables auxiliares que van ayudar a llenar el objeto con sus atributos y propiedades

    //recorriendo el array de inputs y guardando su name y value en el objeto
    inputs.forEach(input => {
        if (!(input.hasAttribute('data-ignore-value') && input.getAttribute('data-ignore-value') === 'true')) {
             key = input.name;
             value = input.value;
            
        }
        obj[key] = value;
    });

    //manejando el select si el value del select no esta vacio
    if (select.value != '') {
        obj[select.name] = select.value; // entonces agregalo al obj
    }

    return obj;

}


const SignInDoctor = async function(form){
    // array de doctores
    //const doctores = getDoctorsFromLocalStorage();

    const doctor = new Doctor();
    doctor.signIn(getValues(form));

    console.log(doctor);

    const response = await sendSignIn(doctor);

    console.log(response);

   if (response) {
    if (response.status === 400 || response.status === 500) {
        alert('El usuario ya existe');
        return
    }
   }

   if (response.StatusCode === 'Ok') {
    alert('El usuario se registro correctamente');
    //
        
    //
}


    console.log('login correcto')

    //addDoctor(doctores, doctor);
    //saveOnLocalStorage(doctores);
}

export default SignInDoctor;