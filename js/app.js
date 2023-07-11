let carrito = []
let inventario = []





inventario.push( new raqueta ('Aero Pro Drive', '35000', 'Babolat'));
inventario.push( new raqueta ('Extreme MP', '26300', 'Head'));
inventario.push( new raqueta ('Pro Staff V13', '25000', 'Wilson'));
inventario.push( new raqueta ('Speed 2022', 30000, 'Head'));
inventario.push( new raqueta ('Graphene', 28000, 'Head'));
inventario.push( new raqueta ('Pure Drive', 20500, 'Babolat'));
inventario.push( new raqueta ('Speed port White', 18000, 'Prince'));
inventario.push( new raqueta ('RDS 001 mid plus', 21000, 'Yonex'));
inventario.push( new raqueta ('DNX 0', 19100, 'Volkl'));
inventario.push( new raqueta ('Cobra', 27300, 'Wilson'));

localStorage.setItem("inventario", JSON.stringify(inventario));

const tabla = document.getElementById('items');
const seleccionarProductos = document.getElementById('productos');
const agregarItem = document.getElementById('agregar');

function traerRaqueta(){
    inventario = JSON.parse(localStorage.getItem('inventario')) || [];
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
}



