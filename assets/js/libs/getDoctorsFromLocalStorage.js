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

export default getDoctorsFromLocalStorage;