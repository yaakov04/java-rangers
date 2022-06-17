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

         console.log( document.querySelector('.name-doctor-profile-card'));

         document.querySelector('.name-doctor-profile-card').innerHTML = `${doctor.nombre} ${doctor.apellidoPaterno}`;
         document.querySelector('.name-doctor-profile').innerHTML = `${doctor.nombre} ${doctor.apellidoPaterno}`;
         document.querySelector('.especialidad-profile-card').innerHTML=`${doctor.especialidad}`;
         document.querySelector('#uni').innerHTML =`${doctor.universidad}`;
         document.querySelector('#cedula').innerHTML =`${doctor.cedula}`;
         document.querySelector('#especialidad').innerHTML =`${doctor.especialidad}`;
         document.querySelector('#espUni').innerHTML =`${doctor.universidadEspecialidad}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         document.querySelector('.star-rate').innerHTML =`${doctor.promedio}`;
         
         
    }
}

export default profile;