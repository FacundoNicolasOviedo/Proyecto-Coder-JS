let precio
let raqueta;
let cantidad;
let total = 0;
let opcion;
let nombreUsuario

alert("Bienvenidos a TenisCenter, para continuar presione aceptar")

nombreUsuario = prompt("ingrese su nombre")



do {
    raqueta = parseInt(prompt("elija el nombre de la raqueta que desea comprar")) 
    precio = Number(prompt("Elija un precio"))

    while (precio <= 0) {
        precio = prompt("Por favor ingrese un precio válido")
    }

    cantidad = parseInt(prompt("elija la cantidad"))
    while (cantidad <= 0){
        cantidad = prompt("Por favor ingrese una cantidad válida")
    }
    opcion = prompt ("Desea agregar mas productos? si/no")
    total = total + precio * cantidad   
}   while (opcion == "si")

alert (nombreUsuario + " el total de su compra es de " + total + " pesos")
