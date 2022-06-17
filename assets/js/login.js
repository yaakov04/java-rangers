
const sendLogin = async (login) => {
    const url = `http://localhost:8080/api/login/`;

    const config = {
        method: 'POST', // or 'PUT' 
        headers: { // se agrega el header
          'Content-Type': 'application/json', //tipo de contenido
        },
        body: JSON.stringify(login)
      }

    try {
        const respuesta = await fetch(url, config);
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.log("Fetch Error", error);
    }

/*
    fetch(URL_MAIN, { //URL del servicio a donde se hara el POST
        method: 'POST', // or 'PUT' 
        headers: { // se agrega el header
          'Content-Type': 'application/json', //tipo de contenido
        },
        body: JSON.stringify(data), //se agrega el cuerpo del POST
      })
      .then(response => response.json()) //se obtiene la respuesta del servidor
      .then(data => { //se obtiene el json
        console.log('Success:', data); //se imprime el json
      })
      .catch((error) => { //si hay un error
        console.error('Error:', error); //se imprime el error
      });

      

*/
      

   

};

const loginDoctor = async function() {
    
    document.addEventListener('click', async (e)=>{
        
        if (e.target.getAttribute('data-action') === 'login') {
            const btn = e.target;
            const inputsNodeList = btn.parentElement.parentElement.querySelectorAll('input');
            console.log(inputsNodeList);
            const inputs = [... inputsNodeList];
            const login = {}
            inputs.forEach(input => {
                login[input.id] = input.value;
                console.log(input.id)
            })

            const response = await sendLogin(login);

            console.log(response)

            if (response.StatusCode === 'Ok') {
                //alert('inicio de sesion correcto');
                //

                  const sesion = {
                    login: true,
                    idUser: response.idUser
                  }  
                  localStorage.setItem('sesion',JSON.stringify(sesion))

                  window.location.href = "profileDoctors.html"
                //
            }

        }
    })
    

    console.log('login')
}

export default loginDoctor;


