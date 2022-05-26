// Importo los templates
import Header from "./templates/Header.js";
import HamburgerMenu from "./templates/HamburgerMenu.js";

// Seleccione el contenedor en el html
const headerHtml = document.querySelector('#header-wrapper');
const hamburgerMenuHtml = document.querySelector('#hamburger-menu');

const templates = function (){
    // Pregunto si existe el contenedor en el html
    if (headerHtml) {
        // Si existe el contenedor se inyecta el template dentro del contenedor
        headerHtml.appendChild(Header());
    }

    if (hamburgerMenuHtml) {
        hamburgerMenuHtml.appendChild(HamburgerMenu());
    }


}

export default templates;