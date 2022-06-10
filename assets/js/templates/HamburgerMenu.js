const HamburgerMenu = function(){
    const hamburgerMenu = document.createElement('div');

    hamburgerMenu.innerHTML=`
    
        <div class="d-flex justify-content-end">
            <aside class="bg-azul main_hamburger_menu_container_aside">
                <div class="d-flex justify-content-center pt-5 pb-5">
                    <button id="close_main_hamburger_menu" class="">x</button>
                </div>
                <nav class="main_hamburger_menu d-flex flex-column">
                    <a class="d-lg-none" href="SignInDoc.html">Soy Doctor</a>
                    <a class="d-lg-none" href="SignInPatient.html">Soy Paciente</a>
                    <a href="index.html">Home</a>
                    <a href="AboutUs.html">Acerca de Nosotros</a>
                    <a href="ContactUs.html">Contáctanos</a>
                </nav>
            </aside>
        </div>
    
    `;

    return hamburgerMenu;
}

export default HamburgerMenu;