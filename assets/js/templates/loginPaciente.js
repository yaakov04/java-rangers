const LoginPaciente = function(){
    const loginPaciente = document.createElement('div');

    loginPaciente.innerHTML=`
    
        <!-- Modal -->
        <div class="modal fade" id="loginPaciente" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Inicia sesión como paciente</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    
                    <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Correo electrónico</label>
                      <input type="email" class="formControl" id="exampleInputEmail1" aria-describedby="emailHelp">
                      <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Contraseña</label>
                      <input type="password" class="formControl" id="exampleInputPassword1">
                    </div>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Recordarme</label>
                    </div>
                    
                    <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
                  </form>
                    
                    </div>
                    <div class="modal-footer">
                       <button type="button" class="btn btn-primary" id="botonModal">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    
    `;

    return loginPaciente;
}

export default LoginPaciente;