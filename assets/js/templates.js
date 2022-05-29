// Importo los templates
import Header from "./templates/Header.js";
import HamburgerMenu from "./templates/HamburgerMenu.js";
import Footer from "./templates/Footer.js";
import DrCards from "./templates/DrCards.js";

// Seleccione el contenedor en el html
const headerHtml = document.querySelector('#header-wrapper');
const hamburgerMenuHtml = document.querySelector('#hamburger-menu');
const footerHtml = document.querySelector('#footer-1');
const drCardContainer = document.querySelector('#cardCreate');

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

    if (drCardContainer) {
        drCardContainer.appendChild(DrCards(`"./assets/img/docotrimg.png"`,"Shaun Murphy","Guadalajara","4.7","Cardiólogo","Médico Internista con especialidad en Cardiología."));
    }


}

export default templates;