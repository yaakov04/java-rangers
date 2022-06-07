//Agrega el doctor al array o modifica un doctor existente
const addDoctor = function(arrDoc, doctor){
    const find = arrDoc.find(doc => doc.id === doctor.id)

    //Si existe
    if (find) {
        arrDoc = arrDoc.map(doc =>{
            if (doc.id === doctor.id) {
                return doctor;
            }
            return doc;
        });
    }
    //Si no existe
    arrDoc.push(doctor);
}

export default addDoctor;