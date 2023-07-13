class Raqueta {
    nombre;
    precio;
    marca;

    constructor(nombre, precio, marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
}

class Producto
{
  producto
  cantidad;

    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

let carrito = []
let inventario = []


inventario.push(new Raqueta('Aero Pro Drive', '35000', 'Babolat'));
inventario.push(new Raqueta('Extreme MP', '26300', 'Head'));
inventario.push(new Raqueta('Pro Staff V13', '25000', 'Wilson'));
inventario.push(new Raqueta('Speed 2022', 30000, 'Head'));
inventario.push(new Raqueta('Graphene', 28000, 'Head'));
inventario.push(new Raqueta('Pure Drive', 20500, 'Babolat'));
inventario.push(new Raqueta('Speed port White', 18000, 'Prince'));
inventario.push(new Raqueta('RDS 001 mid plus', 21000, 'Yonex'));
inventario.push(new Raqueta('DNX 0', 19100, 'Volkl'));
inventario.push(new Raqueta('Cobra', 27300, 'Wilson'));
console.log(inventario)

localStorage.setItem("inventario", JSON.stringify(inventario));

const tabla = document.getElementById('items');
const seleccionarProductos = document.getElementById('productos');
const agregarItem = document.getElementById('agregar');
const total = document.getElementById('total');

function traerRaqueta(){
    inventario = JSON.parse(localStorage.getItem('inventario')) || [];
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    dropdown();
}

function dropdown() {
    inventario.forEach(({nombre,precio},index) => {
    let opcion = document.createElement ("opcion");
    opcion.textContent = `${nombre}:${precio}`;
    opcion.value = index;
    seleccionarProductos.appendChild(opcion);
 })
}

function actualizarTabla(){
    tabla.innerHTML = ""
    tabla.innerText = 0
    carrito.forEach((Producto, index) => {
        filaNueva(Producto, index);
    })
}

function filaNueva(producto, index) {
    const fila = document.createElement("tr")
    let td = document.createElement("td")

    td.classList.add ("text-white");
    td.textContent = producto.Raqueta.nombre;
    fila.appendChild(td);

    td.classList.add('text-white');
    td = document.createElement('td');
    td.textContent = Raqueta.cantidad;
    fila.appendChild(td);
  
    td.classList.add('text-white');
    td = document.createElement('td');
    td.textContent = producto.Raqueta.precio;
    fila.appendChild(td);

    td = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('btn', 'btn-danger');
    botonEliminar.textContent = 'Eliminar Articulo';

    td.appendChild(botonEliminar);
    fila.appendChild(td);
    tabla.appendChild(row);

    total.textContent = carrito.reduce((acc,item) => acc + producto.Raqueta.precio * Raqueta.cantidad, 0)
}

function escucharEventos (){
    document.addEventListener("DOMContentLoaded", traerRaqueta);
    agregarItem.addEventListener("submit", (e) =>{
        e.preventDefault();
        const raquetaSeleccionada = inventario[+seleccionarProductos.value];
        const indiceCarrito = carrito.findIndex ((producto) => producto.raqueta.nombre === raquetaSeleccionada.nombre);
        if (indiceCarrito !== 1) {
            carrito[indiceCarrito].cantidad++;
        } else{
            const item = new item(raquetaSeleccionada,1);
            carrito.push(item);
        }
        actualizarTabla();
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });
}

escucharEventos();
