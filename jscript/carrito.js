
//obtener carrito del localstorage
let carrito =JSON.parse(localStorage.getItem("carrito"))||[];

//mostrar los productos en el carrito

let listaProductos= document.getElementById("listaProductos");
let totalCarrito= 0;
carrito.forEach(function(producto,index){
    let elementoProducto=document.createElement("div");
    elementoProducto.textContent = producto.nombre + "-$ "+producto.precio;
    listaProductos.appendChild (elementoProducto);
    totalCarrito += producto.precio;

    //agregar un boton para eliminar producto de carrito

    let botonEliminar=document.createElement("button");
    botonEliminar.innerHTML=`<button class="estilo-boton">vaciar</button>`;
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

//boton para simular compra
const botonComprar= document.createElement('button');
botonComprar.id='boton-comprar';
botonComprar.className="btn-comprar"
botonComprar.textContent="Realizar compra";
document.body.appendChild (botonComprar);

botonComprar.addEventListener('click',function(){
    Toastify({
        text: "Gracias por su compra!",
        duration: 4000,
        destination: "#",
        newWindow: false,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, rgb(37, 4, 68), violet)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
    
)


