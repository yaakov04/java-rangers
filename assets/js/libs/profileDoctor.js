const getDoctor = async (id) => {
    const url = `http://localhost:8080/api/doctores/${id}`;


    console.log(url)

    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.log("Fetch Error", error);
    }
  }

const profile = async function(){
    const sesion = JSON.parse(localStorage.getItem('sesion'));
    //console.log(sesion);

    if (sesion && sesion.login === true) {
         const id = Number(sesion.idUser);
         console.log(id)
         
         const doctor =  await getDoctor(id);
         console.log(doctor)

         //console.log( document.querySelector('.name-doctor-profile-card'));

         document.querySelector('.name-doctor-profile-card').innerHTML = `${doctor.nombre} ${doctor.apellidoPaterno}`;
         document.querySelector('.name-doctor-profile').innerHTML = `${doctor.nombre} ${doctor.apellidoPaterno}`;
         document.querySelector('.especialidad-profile-card').innerHTML=`${doctor.especialidad}`;
         document.querySelector('#uni').innerHTML =`${doctor.universidad}`;
         document.querySelector('#cedula').innerHTML =`${doctor.cedula}`;
         document.querySelector('#especialidad').innerHTML =`${doctor.especialidad}`;
         document.querySelector('#espUni').innerHTML =`${doctor.universidadEspecialidad}`;
         document.querySelector('#cedulaEspecial').innerHTML =`${doctor.cedulaEspecial}`;
         if (doctor.enfermedadEspecialidad) {
            document.querySelector('#enfermedad1').innerHTML =`${doctor.enfermedadEspecialidad.enfermedad1}`;
            document.querySelector('#enfermedad2').innerHTML =`${doctor.enfermedadEspecialidad.enfermedad2}`;
            document.querySelector('#enfermedad3').innerHTML =`${doctor.enfermedadEspecialidad.enfermedad2}`;
            document.querySelector('#enfermedad4').innerHTML =`${doctor.enfermedadEspecialidad.enfermedad2}`;
        }
         document.querySelector('#biografia').innerHTML =`${doctor.biografia}`;
         document.querySelector('#telefono').innerHTML =`${doctor.telefono}`;
         document.querySelector('#correo').innerHTML =`${doctor.correo}`;
         document.querySelector('#calle').innerHTML =`${doctor.calle}`;
         document.querySelector('#colonia').innerHTML =`${doctor.colonia}`;
         document.querySelector('#ciudad').innerHTML =`${doctor.ciudad}`;
         document.querySelector('#estado').innerHTML =`${doctor.estado}`;
         document.querySelector('#whatsapp').innerHTML =`${doctor.whatsapp}`;
        //  document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
        //  document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
        //  document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         
         
    }else {
        const url_string = window.location.href; //window.location.href
    const url = new URL(url_string);
    const profileId = Number( url.searchParams.get("profileId"));
    if (profileId) {
        console.log(profileId);
        const doctor =  await getDoctor(profileId);
        console.log(doctor)
        document.querySelector('.name-doctor-profile-card').innerHTML = `${doctor.nombre } ${doctor.apellidoPaterno  }`;
         document.querySelector('.name-doctor-profile').innerHTML = `${doctor.nombre } ${doctor.apellidoPaterno  }`;
         document.querySelector('.especialidad-profile-card').innerHTML=`${doctor.especialidad}`;
         document.querySelector('#uni').innerHTML =`${doctor.universidad}`;
         document.querySelector('#cedula').innerHTML =`${doctor.cedula}`;
         document.querySelector('#especialidad').innerHTML =`${doctor.especialidad}`;
         document.querySelector('#espUni').innerHTML =`${doctor.universidadEspecialidad}`;
         document.querySelector('#cedulaEspecial').innerHTML =`${doctor.cedulaEspecial}`;
         if (doctor.enfermedadEspecialidad) {
                document.querySelector('#enfermedad1').innerHTML =`${doctor.enfermedadEspecialidad.enfermedad1}`;
                document.querySelector('#enfermedad2').innerHTML =`${doctor.enfermedadEspecialidad.enfermedad2}`;
                document.querySelector('#enfermedad3').innerHTML =`${doctor.enfermedadEspecialidad.enfermedad2}`;
                document.querySelector('#enfermedad4').innerHTML =`${doctor.enfermedadEspecialidad.enfermedad2}`;
            }
         document.querySelector('#biografia').innerHTML =`${doctor.biografia}`;
         document.querySelector('#telefono').innerHTML =`${doctor.telefono}`;
         document.querySelector('#correo').innerHTML =`${doctor.correo}`;
         document.querySelector('#calle').innerHTML =`${doctor.calle}`;
         document.querySelector('#colonia').innerHTML =`${doctor.colonia}`;
         document.querySelector('#ciudad').innerHTML =`${doctor.ciudad}`;
         document.querySelector('#estado').innerHTML =`${doctor.estado}`;
         document.querySelector('#whatsapp').href =`https://api.whatsapp.com/send/?phone=${doctor.whatsapp}&text=Hola+necesito+m%C3%A1s+informaci%C3%B3n%2C+mi+nombre+es%3A&app_absent=0`;
        
    }else{
        window.location.href='/';
    }
    
    }

    
}

export default profile;