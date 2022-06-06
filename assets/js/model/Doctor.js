class Doctor {
    id;
    img;
    name; 
    city; 
    rating; 
    especialidad; 
    descripcion;
    cedula;
    cedulaEspecial;
    universidad;
    universidadEspecialidad;
    enfermedad = [];
    phone;
    webPage;
    correo;
    facebook;
    instagram;
    whatsapp;

    constructor (){
        this.id = Math.random().toString(36).substr(2);
    }

    signIn(nombre, ){

    }

    //Datos personales
    guardarDatosPersonales(){
        this.name = document.getElementById("formularioDrName").value;
        this.especialidad = document.getElementById("formularioDrEspecialidad").value;
        this.cedula = document.getElementById("formularioDrCedula").value;
        this.cedulaEspecial = document.getElementById("formularioDrCedulaEspecial").value;
        this.img = document.getElementById("formularioDrFoto").value;
    }

    //Educación
    guardarDatosEducacion(){
        this.universidad = document.getElementById("formularioDrUni").value;
        this.universidadEspecialidad = document.getElementById("formularioDrUniEspecialidad").value;
        
    }

    //Descripcion
    guardarDatosDescripcion(){
        this.descripcion = document.getElementById("formularioDrDescripcion").value;
        
    }

    //Principales enfermedades que trata
    guardarDatosEnfermedades(){
        this.enfermedad[0] = document.getElementById("formularioDrEnfermedad1").value;
        this.enfermedad[1] = document.getElementById("formularioDrEnfermedad2").value;
        this.enfermedad[2] = document.getElementById("formularioDrEnfermedad3").value;
        this.enfermedad[3] = document.getElementById("formularioDrEnfermedad4").value;
        
    }

    //Datos personales
    guardarDatosPersonales(){
        this.phone = document.getElementById("formularioDrPhone").value;
        this.webPage = document.getElementById("formularioDrWebPage").value;
        this.correo = document.getElementById("formularioDrCorreo").value;
        this.city = document.getElementById("formularioDrDireccion").value;
        this.facebook = document.getElementById("formularioDrFacebook").value;
        this.instagram = document.getElementById("formularioDrInstagram").value;
        this.whatsapp = document.getElementById("formularioDrWhatsapp").value;
        
    }

}

export default Doctor;