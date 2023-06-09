let precio
let raqueta;
let cantidad;
let total = 0;
let opcion;
let nombreUsuario

alert("Bienvenidos a TenisCenter, para continuar presione aceptar")
function totalCarrito(total, precio, cantidad){
    return total + precio * cantidad
}
nombreUsuario = prompt("ingrese su nombre")



do {
    raqueta = parseInt(prompt("elija el número de la raqueta que desea comprar:" + "\n" + "1- Wilson Pro Staff V13" + "\n" + "2- Head Speed 2022" + "\n" + "3- Babolat Aero Pro Drive" + "\n" + "4- Head Graphene")) 
    while (raqueta >= 5) {
        raqueta = prompt("Por favor ingrese una opción válida")
    }
    precio = Number(prompt("Elija un precio"))

    while (precio <= 0) {
        precio = prompt("Por favor ingrese un precio válido")
    }

    cantidad = parseInt(prompt("elija la cantidad"))
    while (cantidad <= 0){
        cantidad = prompt("Por favor ingrese una cantidad válida")
    }
    opcion = prompt ("Desea agregar mas productos? si/no")
    total = totalCarrito (total, precio, cantidad)
}   while (opcion == "si")

alert (nombreUsuario + " el total de su compra es de " + total + " pesos")
