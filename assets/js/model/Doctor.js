class Doctor {
    //id; //Este id es solo para pruebas, el id real debe ser asignado por el motor de BD
/*
    {
       
        "nombre": "Jose",
        "apellidoPaterno": "Marti",
        "apellidoMaterno": "Martinez",
        "correo": "j@mail.com",
        "password": "123456",
        "especialidad": "Cardiología"
        
    }*/
    nombre; 
    apellidoPaterno;
    apellidoMaterno;
    estado;
    ciudad;
    colonia;
    domicilio;
    telefono;                   
    correo;                     
    password;                   
    fechaNacimiento;
    fotoPerfil;                 
                                
    especialidad;               
    cedula;                     
    cedulaEspecial;             
    descripcion;                
    facebook;                   
    whatsapp;                   
    instagram;                  
    web;                        
    universidad;                
    universidadEspecialidad;    
    biografia;                  
    contador;
    promedio;
    galeria=[];                 
    enfermedadesEspecialidad = [];  

    constructor (){
        //this.id = Math.random().toString(36).substr(2);
    }

    
    signIn(doctor){
        if (doctor.especialidad) {
            this.especialidad = doctor.especialidad;
        }
        this.nombre = doctor.nombre;
        this.apellidoPaterno = doctor.aPaterno;
        this.apellidoMaterno = doctor.aMaterno;
        this.correo = doctor.correo;
        this.password = doctor.password;
    }

    guardarDatosPersonales(){
        this.nombre = document.getElementById("formularioDrName").value;
        this.aPaterno = document.getElementById("formularioPrimerApellido").value;
        this.aMaterno = document.getElementById("formularioSegundoApellido").value;
        this.especialidad = document.getElementById("formularioDrEspecialidad").value;
        this.cedula = document.getElementById("formularioDrCedula").value;
        this.cedulaEspecial = document.getElementById("formularioDrCedulaEspecial").value;
        this.fotoPerfil = document.getElementById("formularioDrFoto").value;
        console.log('hyat')
    }

    //Educación
    guardarDatosEducacion(){
        this.universidad = document.getElementById("formularioDrUni").value;
        this.universidadEspecialidad = document.getElementById("formularioDrUniEspecialidad").value;
    }

     //Descripcion
     guardarDatosDescripcion(){
        this.biografia = document.getElementById("formularioDrBiografia").value;
        this.descripcion = document.getElementById("formularioDrDescripcion").value;
    }

    //Principales enfermedades que trata
    guardarDatosEnfermedades(){
        this.enfermedadesEspecialidad[0] = document.getElementById("formularioDrEnfermedad1").value;
        this.enfermedadesEspecialidad[1] = document.getElementById("formularioDrEnfermedad2").value;
        this.enfermedadesEspecialidad[2] = document.getElementById("formularioDrEnfermedad3").value;
        this.enfermedadesEspecialidad[3] = document.getElementById("formularioDrEnfermedad4").value;
    }

    //Datos contacto
    guardarDatosContacto(){
        this.telefono = document.getElementById("formularioDrPhone").value;
        this.web = document.getElementById("formularioDrWebPage").value;
        this.correo = document.getElementById("formularioDrCorreo").value;
        this.estado = document.getElementById("formularioDrEstado").value;
        this.ciudad = document.getElementById("formularioDrCiudad").value;
        this.colonia = document.getElementById("formularioDrColonia").value;
        this.domicilio = document.getElementById("formularioDrDirreccion").value;
        this.facebook = document.getElementById("formularioDrFacebook").value;
        this.instagram = document.getElementById("formularioDrInstagram").value;
        this.whatsapp = document.getElementById("formularioDrWhatsapp").value;
        
    }

    guardarGaleria(){
        this.galeria[0]= document.querySelector('#formularioDrGaleria1').value;
        this.galeria[1]= document.querySelector('#formularioDrGaleria2').value;
        this.galeria[2]= document.querySelector('#formularioDrGaleria3').value;
        this.galeria[3]= document.querySelector('#formularioDrGaleria4').value;
    }

}

export default Doctor;