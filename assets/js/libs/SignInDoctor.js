const getValues = function(form){
    const nodeList = form.querySelectorAll('input'); // Regresa una lista de nodos
    const inputs = [... nodeList]; // lo convierto a un array

    //manejando el select
    const select = form.querySelector('select');
    
    const obj = {}; // inicializando el objeto que se va a guardar en localStorage
    let key = null; //inicializando variables auxiliares que van ayudar a llenar el objeto con sus atributos y propiedades
    let value = null;  //inicializando variables auxiliares que van ayudar a llenar el objeto con sus atributos y propiedades

    //recorriendo el array de inputs y guardando su name y value en el objeto
    inputs.forEach(input => {
        if (!(input.hasAttribute('data-ignore-value') && input.getAttribute('data-ignore-value') === 'true')) {
             key = input.name;
             value = input.value;
            
        }else if(input.hasAttribute('data-ignore-value')){
            key = input.name;
            value = input.checked
        }
        obj[key] = value;
    });

    //manejando el select si el value del select no esta vacio
    if (select.value != '') {
        obj[select.name] = select.value; // entonces agregalo al obj
    }

    return obj;

}


const SignInDoctor = function(form){
    getValues(form)
}

export default SignInDoctor;