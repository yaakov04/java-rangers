//importacion de los modulos de la aplicacion
import templates from "./templates.js";
import hamburgerMenu from "./libs/hamburgerMenu.js";

//Ejecuta el JS despues de que se haya cargado todo el DOM
document.addEventListener("DOMContentLoaded", () => {
    
    templates(); //Implementa la logica del mini motor de plantillas
    hamburgerMenu(); //Implementa la logica del menu de hamburguesa

});
