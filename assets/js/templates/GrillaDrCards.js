import DoctorCards from "./DrCards.js"; // es importa el card para renderizarlos despues
import doctores from "../libs/doctores.js"; //informacion de prueba para alimentar las cards

// Este template va a renderizar una grilla o grid de cards
const GrillaDrCards = function(){
    const grillaDrCards = document.createElement('div'); //nodo que va a ser el contenedor de la grilla, a este nodo se le debe aplicar flexbox o grid

    grillaDrCards.classList.add('grid-container');

    //Por cada elemento en array de doctores se va crear un card nuevo y se va a inyectar en el nodo 'grillaDrCards'
    doctores.forEach(doctor => {
        const card = DoctorCards(doctor); //Se crea un card y se le pasa la informacion del doctor como parametro
        grillaDrCards.appendChild(card); // Se inyecta el card creado en el nodo 'grillaDrCards'
    });

    return grillaDrCards; // se regesa el nodo que ya contiene todas las cards para que pueda ser inyectado en html

}

export default GrillaDrCards; // Se exporta el componente para que pueda ser usado en el archivo templates.js