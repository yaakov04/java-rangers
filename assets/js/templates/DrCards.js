//Constructor de tarjeta de doctor
const DoctorCards = function(doctor){ // En vez de que reciba varios parametros, mejor que reciba un objeto de tipo doctor con la informacion

    //*Calificacion del doctor en estrellas
    let parteDecimal=doctor.rating%1;
    let star="<img src=\"./assets/img/Star.svg\">";
    let StarRating = null;
    //Muestra las estrellas completas de la calificacion segun el número de calificacion.
    if (doctor.rating>0&&doctor.rating<=1.75)
        {StarRating= star;}
        else if (doctor.rating>1.75&&doctor.rating<=2.75)
            {StarRating=star+star;}
        else if (doctor.rating>2.75&&doctor.rating<=3.75)
            {StarRating=star+star+star;}
        else if (doctor.rating>3.75&&doctor.rating<=4.75)
            {StarRating=star+star+star+star;}
        else if (doctor.rating>4.75&&doctor.rating<=5)
            {StarRating=star+star+star+star+star;}
    else{StarRating="";}
    //Muestra una media estrella si la parte decimal del numero es mayor a 0.25, y menor a 0.75 ya que en ese punto se creará otra estrella completa por promedio.
    if(parteDecimal>=0.25&&parteDecimal<=0.75){
        StarRating+="<img src=\"./assets/img/halfStar.svg\" width=\"24px\" height=\"20px\">";}

    //*Construccion de la tarjeta
    const containerCard = document.createElement('div'); // Agregue un nodo como contenedor de un card individual

    containerCard.innerHTML=`
    <div class="card">
        <div class="imgContainer">
            <img src="${ doctor.img }" class="card-img-top" alt="Foto de perfil del Dr. ${doctor.name}">
            <div class="drData">
                <div class="drName"> ${ doctor.name }</div>
                <div class="drCity">${ doctor.city }</div>
                <div id="starRate">${ StarRating }</div>
            </div>
        </div>
        <div class="card-body">
            <p class="especialidad">${ doctor.especialidad }</p>
            <p class="descripcion">${ doctor.descripcion }</p>
            <a href="#" class="btnAgendarCita">Agendar Cita</a>
        </div>
    </div>`;
    
    return containerCard; //regreso el nodo con el card

}

export default DoctorCards;
