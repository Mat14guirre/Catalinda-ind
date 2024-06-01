//FORMULARIO REGISTRO --------------------------------------------------------------------------------

document.getElementById("registroButton").addEventListener("click",function(){

    let nombre=document.getElementById("nombre").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    //verifica si el email esta registrado

    if(localStorage.getItem(email)!==null){
        document.getElementById("mensajeError").innerText= "este email ya esta regsitrado";
        document.getElementById("mensajeError").style.display="block";
        return;
    }

    //guarda los datos en localstorage

    localStorage.setItem(email,JSON.stringify({nombre: nombre, password : password}));

    //oculta formulario de registro y muestra inicio de sesion

    document.getElementById ("registroForm").style.display="none";
    document.getElementById ("inicioSesionForm").style.display="block";
});