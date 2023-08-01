
let carrito = []
let inventario = []


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

localStorage.setItem("inventario", JSON.stringify(inventario));

const tabla = document.getElementById('items');
const seleccionarProductos = document.getElementById('productos');
const agregarRaqueta = document.getElementById('agregar');
const total = document.getElementById('total');


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
        carrito.splice (index,1);
        actualizarTabla();
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    td.appendChild(botonEliminar);
    fila.appendChild(td);
    tabla.appendChild(fila);

    total.textContent = carrito.reduce((acc,item) => acc + item.nombre.precio * item.cantidad, 0);
}


agregarRaqueta.addEventListener("submit", (e) => {
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


traerStock();




