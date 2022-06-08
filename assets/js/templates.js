// Importo los templates
import Header from "./templates/Header.js";
import HamburgerMenu from "./templates/HamburgerMenu.js";
import Footer from "./templates/Footer.js";
import GrillaDrCards from "./templates/GrillaDrCards.js"; // importo el template de la grilla

// Seleccione el contenedor en el html
const headerHtml = document.querySelector('#header-wrapper');
const hamburgerMenuHtml = document.querySelector('#hamburger-menu');
const footerHtml = document.querySelector('#footer-1');
const drCardContainer = document.querySelector('#cardCreate'); // Selecciono el lugar en donde se va a inyectar la grilla

const templates = function (){
    // Pregunto si existe el contenedor en el html
    if (headerHtml) {
        // Si existe el contenedor se inyecta el template dentro del contenedor
        headerHtml.appendChild(Header());
    }

    if (hamburgerMenuHtml) {
        hamburgerMenuHtml.appendChild(HamburgerMenu());
    }

    if (footerHtml) {
        footerHtml.appendChild(Footer());
    }

    // Nos aseguramos que exista el lugar en el html en donde se va a inyectar la grilla
    if (drCardContainer) {
        drCardContainer.appendChild(GrillaDrCards()); // inyecto la grilla
    }


}

export default templates;