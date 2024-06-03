
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
    botonEliminar.innerHTML=`<button class="estiloboton">Eliminar</button>`;
    botonEliminar.onclick=function(){
        eliminarProducto(index);
    };
    elementoProducto.appendChild(botonEliminar);
    listaProductos.appendChild(elementoProducto);
});

document.getElementById("totalCarrito").textContent="$"+ totalCarrito.toFixed(2);



//funcion para eliminar del carrito

function eliminarProducto (index) {
    let carrito= JSON.parse(localStorage.getItem("carrito"))||[];
//eliminar producto    
    carrito.splice(index,1);

    localStorage.setItem("carrito",JSON.stringify(carrito));
//recargar pagina para ver cambios
    location.reload();
}