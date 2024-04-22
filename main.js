//RECOMENDAR ROPA SEGUN EPOCA DEL AÑO -----------------------------------------------------------------

const veranoRopa = ["musculosa " , "bermuda ", "zandalias ", " ojotas"];

const primaveraRopa = ["remera ", "pantalon liviano ", "zapatillas "];

const otoñoRopa = ["buzo liviano ", "campera liviana ","pantalon " , "zapatillas "];

const inviernoRopa = ["remera termica ", "campera abrigada ", "pantalon grueso ", "botas "];

function recomendarRopa (){

    let etapaAño = prompt ("Bienvenidos, elija una etapa  del año para recomendarte- ej: otoño" ).toLowerCase ();

    let ropaRecomendada ;

    switch (etapaAño){
        case "primavera":
            ropaRecomendada = primaveraRopa ;
            break;
        case "verano" :
            ropaRecomendada = veranoRopa ;
            break ;
        case "otoño" :
            ropaRecomendada = otoñoRopa;
            break;
        case "invierno":   
            ropaRecomendada = inviernoRopa;
            break;
        default:
            alert ("actualice y escriba una etapa del año valida(verano/primavera/ otoño /invierno")   
            return             
    }
    alert ("para " + etapaAño + " te ofrecemos: "+ ropaRecomendada )
}

recomendarRopa (); 

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
