class raqueta{
    nombre;
    precio;
    marca;

    constructor(nombre, precio, marca){
        this.nombre = nombre;
        this.precio = precio;
        this. marca = marca;
    }
}

const raquetas = [];
let cantidad;
let total = 0;
let opcion;
let nombreUsuario
let seguir


raquetas.push( new raqueta ('Pro Staff V13', '25000', 'Wilson'))
raquetas.push( new raqueta ('Speed 2022', '30000', 'Head'))
raquetas.push( new raqueta ('Aero Pro Drive', '35000', 'Babolat'))
raquetas.push( new raqueta ('Graphene', '28000', 'Head'))

alert("Bienvenidos a TenisCenter, para continuar presione aceptar")
nombreUsuario = prompt("ingrese su nombre")
do {
    const listaStringRaquetas = raquetas.map(
        (raqueta, index) => `
                        ${index + 1}: ${raqueta.nombre} precio: ${raqueta.precio}
    `)
    opcion = parseInt(prompt("elija el número de la raqueta que desea comprar:" + "\n" + listaStringRaquetas.join("")));
    while (opcion <= 0 || opcion > raquetas.length) {
        opcion = parseInt(prompt("Por favor ingrese una opción válida" + "\n" + listaStringRaquetas.join("")));
    }
    cantidad = parseInt(prompt("elija la cantidad"));
    while (cantidad <= 0){
        cantidad = parseInt(prompt("Por favor ingrese una cantidad válida"));
    }
    total = total + raquetas[opcion - 1].precio*cantidad;
    seguir = prompt ("Desea agregar mas productos? si/no");
}  
while (seguir == "si");

alert (nombreUsuario + " el total de su compra es de " + total + " pesos");
