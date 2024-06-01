//FORMULARIO DE INICIO DE SESION------------------------------------

document.getElementById("inicioSesionButton").addEventListener("click",function(){
    let email = document.getElementById ("loginEmail").value;
    let password= document.getElementById ("loginPassword").value;

    //verifica si el email esta registrado
    if(localStorage.getItem(email)===null){
        document.getElementById("mensajeError").innerText="este email no esta registrado";
        document.getElementById("mensajeError").style.display="block";
        return;
    }

    //obtener datos almacenados
    let usuario= JSON.parse(localStorage.getItem(email));

    //verifica si la contraseña es correcta 

    if(usuario.password !== password){
        document.getElementById("mensajeError").innerText="contraseña incorrecta";
        document.getElementById("mensajeError").style.display="block";
        return;
    }
    //inicio de sesion exitoso
    document.getElementById("mensajeError").innerText="";
    document.getElementById("mensajeError").style.display="none";
    document.getElementById("inicioSesionForm").style.display="none";
    alert("Bienvenido, " + usuario.nombre + "!");

}); 