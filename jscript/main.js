
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

