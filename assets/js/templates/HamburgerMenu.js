const HamburgerMenu = function(){
    const hamburgerMenu = document.createElement('div');

    hamburgerMenu.innerHTML=`
    
        <div class="d-flex justify-content-end">
            <aside class="bg-azul main_hamburger_menu_container_aside">
                <div class="d-flex justify-content-center pt-5 pb-5">
                    <button id="close_main_hamburger_menu" class="">x</button>
                </div>
                <nav class="main_hamburger_menu d-flex flex-column">
                <!--<a class="d-lg-none" href="SignInDoc.html">Soy Doctor</a>-->
                    <!--<a class="d-lg-none" href="SignInPatient.html">Soy Paciente</a>-->
                            <div class="dropdown">
                                <a class="d-lg-none" style="cursor:pointer;" data-toggle="dropdown" >Soy Doctor/a</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <button class="dropdown-item" data-toggle="modal" data-target="#loginDoctor">Ingresar</button>
                                    <form method="get" action="SignInDoc.html">
                                    <button type="submit" class="dropdown-item" data-toggle="modal" data-target="#SignInDoc.html">Registrarse</button>
                                    </form>
                                </div>
                                <div class="dropdown">
                                <a data-toggle="dropdown" style="cursor:pointer;" class="d-lg-none">Soy Paciente</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <button class="dropdown-item" data-toggle="modal" data-target="#loginDoctor">Ingresar</button>
                                    <form method="get" action="SignInPatient.html">
                                    <button type="submit" class="dropdown-item" data-toggle="modal" data-target="SignInPatient.html">Registrarse</button>
                                    </form>
                                </div>
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