//Constructor de tarjeta de doctor
const DoctorCards = function(imgLink,doctorName,doctorCity,doctorRating,doctorEspecialidad,doctorDescripcion){

    //*Calificacion del doctor en estrellas
    let parteDecimal=doctorRating%1;
    let star="<img src=\"./assets/img/Star.svg\">";
    let StarRating = null;
    //Muestra las estrellas completas de la calificacion segun el número de calificacion.
    if (doctorRating>0&&doctorRating<=1.75)
        {StarRating= star;}
        else if (doctorRating>1.75&&doctorRating<=2.75)
            {StarRating=star+star;}
        else if (doctorRating>2.75&&doctorRating<=3.75)
            {StarRating=star+star+star;}
        else if (doctorRating>3.75&&doctorRating<=4.75)
            {StarRating=star+star+star+star;}
        else if (doctorRating>4.75&&doctorRating<=5)
            {StarRating=star+star+star+star+star;}
    else{StarRating="";}
    //Muestra una media estrella si la parte decimal del numero es mayor a 0.25, y menor a 0.75 ya que en ese punto se creará otra estrella completa por promedio.
    if(parteDecimal>=0.25&&parteDecimal<=0.75){
        StarRating+="<img src=\"./assets/img/halfStar.svg\" width=\"24px\" height=\"20px\">";}

    //*Construccion de la tarjeta
    const containerCard = document.createElement('div'); // Agregue un nodo como contenedor de un card individual

    containerCard.innerHTML=`<div class="card" style="width: 18rem;">
    <div class="imgContainer">
    <img src=` + imgLink + `class="card-img-top" alt="...">
    <div class="drData">
        <div class="drName">` + doctorName + `</div>
        <div class="drCity">` + doctorCity + `</div>
        <div id="starRate">` + StarRating + `</div>
    </div>
    </div>
    <div class="card-body">
    <p class="especialidad">` + doctorEspecialidad + `</p>
    <p class="descripcion">` + doctorDescripcion + `</p>
    <a href="#" class="btnAgendarCita">Agendar Cita</a>
    </div>
    </div>`;
    
    return containerCard; //regreso el nodo con el card

}

export default DoctorCards;
