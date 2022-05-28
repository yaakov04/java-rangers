//En esta funcion se implementara toda la logica del menu
const hamburgerMenu = function () {
    const btn = document.querySelector("#main_hamburger_menu_btn");
    const btnClose = document.querySelector("#close_main_hamburger_menu");
    const container = document.querySelector(".main_hamburger_menu_container");
    const asideContainer = document.querySelector(".main_hamburger_menu_container_aside");

    //Muestra el menu al hacer click en el boton
    btn.addEventListener("click", () => {
        document.body.style.overflow = "hidden";
        container.style.display = "block";
        setTimeout(() => {
            container.style.opacity = "1";
        }, 100);
        asideContainer.classList.remove("exit-to-right");
        asideContainer.classList.add("entry-to-left");
    });

    //Cierra el menu
    btnClose.addEventListener("click", () => {
        asideContainer.classList.remove("entry-to-left");
        asideContainer.classList.add("exit-to-right");
        container.style.opacity = "0";
        setTimeout(() => {
            container.style.display = "none";
            document.body.style.overflow = "auto";
        }, 500);
    });
};

export default hamburgerMenu;