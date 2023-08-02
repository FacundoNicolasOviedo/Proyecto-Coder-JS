
let carrito = []
let stock = []


async function traerStock () {
    const respuesta = await fetch("stock.json")
    if (respuesta.ok) {
        stock = await respuesta.json();
    } else {
        Toastify({
            text: "Hubo un problema intente nuevamente mas tarde",
            className: "Error"
        })
    }
    dropdown()
}



const tabla = document.getElementById('items');
const seleccionarProductos = document.getElementById('productos');
const agregarRaqueta = document.getElementById('agregar');
const total = document.getElementById('total');
const botonVaciar = document.getElementById('vaciar')


function dropdown() {
    stock.forEach(({nombre,precio},index) => {
    let opcion = document.createElement ("option");
    opcion.textContent = `${nombre}: $${precio}`;
    opcion.value = index;
    seleccionarProductos.appendChild(opcion);
 })
}

function actualizarTabla(){
    tabla.innerHTML = ""
    total.innerText = 0
    carrito.forEach((item, index) => {
        filaNueva(item, index);
    })
}

function filaNueva(item, index) {
    const fila = document.createElement("tr")
    let td = document.createElement("td")

    td.classList.add ("text-black");
    td.textContent = item.nombre.nombre;
    fila.appendChild(td);


    td.classList.add('text-black');
    td = document.createElement('td');
    td.textContent = item.nombre.precio;
    fila.appendChild(td);

    td.classList.add('text-black');
    td = document.createElement('td');
    td.textContent = item.cantidad;
    fila.appendChild(td);
  

  
 

    td = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('btn', 'btn-danger');
    botonEliminar.textContent = 'Eliminar Articulo';

    botonEliminar.onclick = () => {
        Swal.fire({
            title: '¿Seguro quieres eliminar este item del carrito?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: 'No',
          }).then((result) => {
            if (result.isConfirmed) {
                Toastify({
                    text: 'Producto eliminado correctamente',
                    duration: 2000,
                    close: true,
                    stopOnFocus: true,
                    gravity: 'bottom',
                    style: {
                        background: "linear-gradient(to right, #c61d1d, #c4821d)",
                      },
                }).showToast();
                carrito.splice (index,1);
                actualizarTabla();
                localStorage.setItem("carrito", JSON.stringify(carrito));
            } else if (result.isDenied) {
              
            }
          })
       
    }

    td.appendChild(botonEliminar);
    fila.appendChild(td);
    tabla.appendChild(fila);

    total.textContent = carrito.reduce((acc,item) => acc + item.nombre.precio * item.cantidad, 0);
}


agregarRaqueta.addEventListener("submit", (e) => {
    Toastify({
        text: 'Producto agregado correctamente',
        duration: 2000,
        close: true,
        stopOnFocus: true,
        gravity: 'bottom',
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
    }).showToast();
		e.preventDefault();
		const raquetaSeleccionada = stock[+seleccionarProductos.value];
		const producto = carrito.find((producto) => producto.nombre.nombre === raquetaSeleccionada.nombre);
		if (producto) {
			producto.cantidad++;
		} else {
			const item = new Raqueta(raquetaSeleccionada, 1);
			carrito.push(item);
		}
        localStorage.setItem("carrito", JSON.stringify(carrito));
		actualizarTabla();
	});
    
botonVaciar.addEventListener('click', vaciarCarrito)    


function vaciarCarrito () {
    Swal.fire({
        title: '¿Seguro quieres vaciar el carrito?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
            carrito = []
            actualizarTabla();
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }
      })
   
}

traerStock();




