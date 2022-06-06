 //Funcion para guardar el array de personas
 const saveOnLocalStorage = function(arr){
    localStorage.setItem('doctores', JSON.stringify(arr));
    //console.log(localStorage)

}

export default saveOnLocalStorage;