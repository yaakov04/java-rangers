const search = function(){

    //Esta funcion valida los inputs y si los inputs no estan vacios de redirecciona a la pagina de busqueda con los terminos buscados en la url
    const validation = function (container,terminoBusqueda, city){
        //valida si los inputs estan vacios
        if (!terminoBusqueda && !city) {
            container.classList.add('border', 'border-danger'); //si estan vacios el borde de los inpus se pinta de color rojo
            return;
        }
        //si no estan vacios
        container.classList.remove('border', 'border-danger')
        console.log('buscando');
        window.location.href = `SearchPage.html?query=${terminoBusqueda}&city=${city}`; //redirecciona con los terminos de busqueda en la url
    }

    const btnSearch = document.querySelector('#btn-search');
    if(btnSearch){
        btnSearch.addEventListener('click', (e) => {
            e.preventDefault();
            const container = btnSearch.parentElement.parentElement.parentElement; //se obtiene el contenedor de los inputs
           
            const terminoBusqueda = container.querySelector('.buscador').value; //se obtiene
            const city = container.querySelector('.ciudad').value;

            validation(container, terminoBusqueda, city);

        });

        const btnSearchMobile = document.querySelector('#btn-search-mobile');
        if (btnSearchMobile) {
            btnSearchMobile.addEventListener('click', (e) => {
                e.preventDefault();
                const container = btnSearchMobile.parentElement.parentElement.parentElement;
    
                const terminoBusqueda = container.querySelector('.m-buscador').value;
                const city = container.querySelector('.ciudad').value;
                
                validation(container, terminoBusqueda, city);
            });
        }
        }

};

export default search;