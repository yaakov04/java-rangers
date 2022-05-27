const Footer = function(){
    // se crea un nodo con document.createElement()
    const footer = document.createElement('div');

// al innerHTML del nodo creado se le inserta el codigo html del componente
footer.innerHTML= `<footer class="bg-white">
<div class="container py-5" id="footer-1">
  <div class="row py-4">
    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0" id="logo"><img src="./assets/img/logoDoc.svg" alt="" width="180" class="mb-3">
    </div>
    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <h6 class="tituloFooter">SOBRE DOCTORFY</h6>
      <ul class="list-unstyled mb-0">
        <li class="mb-2"><a href="AboutUs.html" class="text-muted">Quiénes somos</a></li>
        <li class="mb-2"><a href="#" class="text-muted">Terminos y condiciones</a></li>
        <li class="mb-2"><a href="#" class="text-muted">Politica de privacidad</a></li>
      </ul>
    </div>
    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <h6 class="tituloFooter">AYUDA</h6>
      <ul class="list-unstyled mb-0">
        <li class="mb-2"><a href="#" class="text-muted">FAQ</a></li>
        <li class="mb-2"><a href="#" class="text-muted">Beneficios</a></li>
        <li class="mb-2" class"text-muted" style="color: #6C757D;">Registrate:</li>
        <li class="mb-2"><a href="SignInPatient.html" class="text-muted">Como paciente</a></li>
        <li class="mb-2"><a href="SignInDoc.html" class="text-muted">Como doctor</a></li>
      </ul>
    </div>
    <div class="col-lg-3 col-md-6 mb-lg-0">
        <h6 class="tituloFooter">CONTACTO</h6>
        <ul class="list-unstyled mb-0">
          <li class="mb-2"><a href="ContactUs.html" class="text-muted">Escribenos</a></li>
          <li class="mb-2"><a href="https://www.facebook.com/" class="text-muted" Target="_blank">Facebook</a></li>

         
        </ul>
      </div>
    </div>
    
  </div>
</div>
</footer>
`;
return footer;
}

export default Footer;

//!<footer class="bg-white" id="footer-1"></footer>
