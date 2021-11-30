// 1. Mostrar la lista de productos
var productoUno = "remera";
var productoDos = "jean";
var productoTres = "bermuda";
var productoCuatro = "camisa";
var productoCinco = "buzo";
var productoSeis = "campera";

var lista = productoUno +", " + productoDos +" ," +productoTres +" ," +productoCuatro +' ,' +productoCinco+' ,' +productoSeis;

console.log("LA LISTA DE PRODUCTOS ES:" + lista);

//2. Pedirle que nos diga 3 productos que quiere
var productoUnoSeleccionado = prompt("CUAL PRODUCTO 1 QUIERES");
var productoDosSellecionado = prompt("CUAL PRODUCTO 2 QUIERES");
var productoTresSellecionado = prompt("CUAL PRODUCTO 3 QUIERES");


//3. Mostrarle el precio de sus productos
alert("El precio de sus productos es: $" + 9000);

//4. Pedirle que ingrese con cuánto va a pagar
var pago = prompt("Con cuánto va a pagar");

//5. Mostrarle el cambio
console.log("Su cambio es: " + parseInt(pago - 9000));
