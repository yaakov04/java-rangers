import DoctorCards from "./DrCards.js"; // es importa el card para renderizarlos despues
import d from "../libs/doctores.js"; //informacion de prueba para alimentar las cards

const getDoctors = async (ciudad, query) => {
    const url = `http://localhost:8080/api/doctores/query?${ciudad ?'ciudad='+ciudad : ''}${query ?'&query='+query:''}`;


    console.log(url)

    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.log("Fetch Error", error);
    }
}

// Este template va a renderizar una grilla o grid de cards
const GrillaDrCards = async function(){
    const grillaDrCards = document.createElement('div'); //nodo que va a ser el contenedor de la grilla, a este nodo se le debe aplicar flexbox o grid

    grillaDrCards.classList.add('grid-container');

    const url_string = window.location.href; //window.location.href
    const url = new URL(url_string);
    const ciudad = url.searchParams.get("city");
    const query = url.searchParams.get("query");

    //console.log(c);

    const doctores = await getDoctors(ciudad, query);

    console.log(doctores)

    //Por cada elemento en array de doctores se va crear un card nuevo y se va a inyectar en el nodo 'grillaDrCards'
    doctores.forEach(doctor => {
        const card = DoctorCards(doctor); //Se crea un card y se le pasa la informacion del doctor como parametro
        grillaDrCards.appendChild(card); // Se inyecta el card creado en el nodo 'grillaDrCards'
    });

    return grillaDrCards; // se regesa el nodo que ya contiene todas las cards para que pueda ser inyectado en html

}

export default GrillaDrCards; // Se exporta el componente para que pueda ser usado en el archivo templates.js