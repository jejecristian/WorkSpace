// ejemplo de ingreso de datos
var nombre = prompt('ingrese su nombre');
alert("hola " + nombre);
console.log('ingreso el usuario ' + nombre);

// suma
var numeroUno = 2;
var numeroDos = 4;
var suma = numeroUno + numeroDos;
console.log("el resultado de la suma es: " + suma);
// resultado = 6

console.log("el resultado de la suma es: " + (2 + 4));
// resultado = 6
// resultado = "24"

// resta
var resta = numeroUno - numeroDos;
console.log("el resultado de la resta es: " + resta);

// multiplicacion
var multiplicacion = numeroUno * numeroDos;
console.log("el resultado de la multiplicacion: " + multiplicacion)

// division
var division = numeroUno/numeroDos;
console.log("el resultado de la division es: " + division);

console.log("variable numeroUno es " + typeof(numeroUno));
console.log("variable numeroDos es " + typeof(numeroDos));

numeroUno = prompt("ingrese un numero");
numeroDos = prompt("ingrese otro numero");

console.log("Ahora la variable numeroUno es " + typeof(numeroUno));
console.log("Ahora la variable numeroDos es " + typeof(numeroDos));

var resultado = parseInt(numeroUno) + parseInt(numeroDos);
alert("la suma es: " + resultado);

document.write("hola");
document.write("<h1>hola</h1>");
document.write("<h2>" + nombre + "</h2>");


