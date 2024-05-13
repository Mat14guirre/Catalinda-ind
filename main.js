//CALCULAR COSTO DE ENVIO DE PRODUCTO-----------------------------------------------------------------

// variable para costo base de envio
let costoBaseEnvio = 1000 ;

//funcion para calcular el costo de envio segun kilometros  1km= 50pesos
function calcularCostoEnvio (distancia) {
    let costoPorKilometro = 50 ; 

//distancia * costo de kilometro + costo base de envio
    let costoEnvio = distancia * costoPorKilometro + costoBaseEnvio ;

    return costoEnvio;
}
//ejemplo con 20 kilometros
let distanciaEnvio = 20

let costoTotalEnvio = calcularCostoEnvio (distanciaEnvio) ;

console.log ("el costo del envio por "+ distanciaEnvio+ "km, es $ " +  costoTotalEnvio);


//CONTROLADOR DE STOCK ---------------------------------------------------------------------------

let stockRemeras = 30
let stockBermudas= 40
let stockZapatillas= 10
let stockPantalones= 20

function mostrarStock (){
    console.log ("stock actual: ")
    console.log ("remeras: "+ stockRemeras)
    console.log ("bermudas: "+ stockBermudas)
    console.log ("zapatillas: "+ stockZapatillas)
    console.log ("pantalones: "+ stockPantalones)
}
console.log (mostrarStock())

//ejemplo sumar stock con remeras
function sumarStock (cantidad){
    for (let i=0 ; i < cantidad; i++ ){
        stockRemeras++;
    }
    
}

//ejemplo restar stock en pantalones
function restarStock (cantidad){
    for (let i = 0; i< cantidad; i++){
        if (stockPantalones >0) {
            stockPantalones--;
        }else {
            console.log ("no hay mas stock")
            break
        }
    }

}
console.log ("SE ENCONTRARON CAMBIOS: ")

sumarStock(5)

restarStock(2)

console.log (mostrarStock())


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
    
    if(usuario.password === password) {
        document.getElementById("mensajeError").innerText="";
        document.getElementById("mensajeError").style.display="none";
        document.getElementById("registroForm").style.display="none";
        document.getElementById("inicioSesionForm").style.display="none";
        document.getElementById("mensajeparacarrito").style.display="none";
        alert("Bienvenido, " + usuario.nombre + "!");
        return;

    }

}); 

    

//CARRITO DE COMPRAS----------------------------------------------------------------------------------

//obtener carrito del localstorage
let carrito =JSON.parse(localStorage.getItem("carrito"))||[];

//mostrar los productos en el carrito

let listaProductos= document.getElementById("listaProductos");
let totalCarrito= 0;
carrito.forEach(function(producto,index){
    let elementoProducto=document.createElement("li");
    elementoProducto.textContent = producto.nombre + "-$ "+producto.precio;
    listaProductos.appendChild (elementoProducto);
    totalCarrito += producto.precio;

    //agregar un boton para eliminar producto de carrito

    let botonEliminar=document.createElement("button");
    botonEliminar.textContent="Eliminar";
    botonEliminar.onclick=function(){
        eliminarProducto(index);
    };
    elementoProducto.appendChild(botonEliminar);
    listaProductos.appendChild(elementoProducto);
});

document.getElementById("totalCarrito").textContent="$"+ totalCarrito.toFixed(2);



//funcion para agregar al carrito
function agregarAlCarrito(nombre,precio){
    //obtener el carrito de localstorage o crear uno nuevo si no existe
    let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

    //agregar el produco al carrito
    carrito.push({nombre:nombre,precio:precio});

    //guardar el carrito actualizado en el localstorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//funcion para eliminar del carrito

function eliminarProducto (index) {
    let carrito= JSON.parse(localStorage.getItem("carrito"))||[];
//eliminar producto    
    carrito.splice(index,1);

    localStorage.setItem("carrito",JSON.stringify(carrito));
//recargar pagina para ver cambios
    location.reload();
}

