


let carrito = []

async function obtenerDatos(){
    try {
        const respuesta= await fetch ('../jscript/db/datos.json');
        if(!respuesta.ok){
            throw new error("Error en la respuesta de la red");
        }
        const datos= await respuesta.json();

        mostrarDatos(datos);

    }catch (error){
        console.error("error al obtener datos",error);
    }
}

function mostrarDatos (datos){
    const listaProductos= document.getElementById ('lista-productos');
    datos.forEach (item=>{
        const elementoLista= document.createElement ("div");
        elementoLista.innerHTML= `<h3 class="letra-datos">${item.nombre}</h3> 
                                <p class="precio-datos">$ ${item.precio}</p>
                                <img class="imagen-datos" src="${item.imagen}" alt=> `

        const botonAgregar= document.createElement('button');
        botonAgregar.innerHTML = `<button class="estilo-boton">Agregar</button>`;
        botonAgregar.onclick =()=>agregarAlCarrito(item);
        
        elementoLista.appendChild(botonAgregar);
        listaProductos.appendChild(elementoLista);
    });
}

//funcion para agregar al carrito
function agregarAlCarrito(producto){
    //obtener el carrito de localstorage o crear uno nuevo si no existe
    let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

    //agregar el produco al carrito
    carrito.push(producto);

    //guardar el carrito actualizado en el localstorage
    localStorage.setItem("carrito", JSON.stringify(carrito)); 

    Toastify({
        text: " Agregado al carrito!",
        duration: 2000,
        destination: "#",
        newWindow: false,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, rgb(102, 46, 102), rgb(169, 85, 248))",
        },
        onClick: function(){} // Callback after click
      }).showToast();


  }

  
window.onload = obtenerDatos;













