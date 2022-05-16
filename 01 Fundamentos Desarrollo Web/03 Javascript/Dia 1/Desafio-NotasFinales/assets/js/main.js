
//Ingreso de nombre y carrera
var nombre = prompt("Ingresa un nombre: ");
var carrera = prompt("Ingresa una carrera: ");

//Ingreso del primer ramo
var ramo1 = prompt("Ingresa primer ramo: ");

//Ingreso de notas primer ramo
var nota1 = prompt("Ingrese nota 1 [" + ramo1 + "]");
var nota2 = prompt("Ingrese nota 2 [" + ramo1 + "]");
var nota3 = prompt("Ingrese nota 3 [" + ramo1 + "]");

//Ingreso del segundo ramo
var ramo2 = prompt("Ingresa segundo ramo: ");

//Ingreso de notas segundo ramo
var nota4 = prompt("Ingrese nota 1 [" + ramo2 + "]");
var nota5 = prompt("Ingrese nota 2 [" + ramo2 + "]");
var nota6 = prompt("Ingrese nota 3 [" + ramo2 + "]");

//Ingreso del tercer ramo
var ramo3 = prompt("Ingresa un tercer ramo: ");

//Ingreso de notas tercer ramo
var nota7 = prompt("Ingrese nota 1 [" + ramo3 + "]");
var nota8 = prompt("Ingrese nota 2 [" + ramo3 + "]");
var nota9 = "-";
var notaAprobacion = prompt("Ingrese nota aprobación [" + ramo3 + "]");


//Se crea header con titulo Notas finales
document.write("<header class='container'>");
document.write("<h1>Notas finales</h1>");
document.write("</header>");

//Aquí creamos nuestro div contenedor
document.write("<div class='container'>");

//Encabezado
document.write("<table class='table table-borderless w-25'>");
document.write("<tbody>");
document.write("<tr>");
document.write("<td class='font-weight-bold'>Nombre:</td>");
document.write("<td>" + nombre + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td class='font-weight-bold'>Carrera:</td>");
document.write("<td>" + carrera + "</td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");

//Aquí creamos nuestra tabla con bootstrap
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
//Con tr definimos las columnas de la tabla
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Ramo:</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</tr");
//Aquí cerramos el encabezado de nuestra tabla
document.write("</thead>");
//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");

//Fila 1
document.write("<tr>");
document.write("<td>"+ramo1+"</td>");
document.write("<td>"+nota1+"</td>");
document.write("<td>"+nota2+"</td>");
document.write("<td>"+nota3+"</td>");
//Conversion de notas a valor flotante
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
//Calculo promedio del primer ramo
var promedio = (nota1 + nota2 + nota3) / 3;
//Muestra promedio con solo 2 decimales
promedio = parseFloat(promedio).toFixed(2);
//Imprime promedio de notas del primer ramo
document.write("<td>"+promedio+"</td>");
document.write("</tr>");

//Fila 2
document.write("<tr>");
document.write("<td>"+ramo2+"</td>");
document.write("<td>"+nota4+"</td>");
document.write("<td>"+nota5+"</td>");
document.write("<td>"+nota6+"</td>");
//Conversion de notas a valor flotante
nota4 = parseFloat(nota4);
nota5 = parseFloat(nota5);
nota6 = parseFloat(nota6);
//Calculo promedio del segundo ramo
var promedio2 =(nota4 + nota5 + nota6) / 3;
//Muestra promedio con solo 2 decimales
promedio2 = parseFloat(promedio2).toFixed(2);
//Imprime promedio de notas del segundo ramo
document.write("<td>"+promedio2+"</td>");
document.write("</tr>");

//Fila 3
document.write("<tr>");
document.write("<td>"+ramo3+"</td>");
document.write("<td>"+nota7+"</td>");
document.write("<td>"+nota8+"</td>");
document.write("<td>"+nota9+"</td>");
//Conversion de notas a valor flotante
nota7 = parseFloat(nota7);
nota8 = parseFloat(nota8);
//Imprime promedio de notas del segundo ramo
var promedio3 = "-";
document.write("<td>"+promedio3+"</td>");
document.write("</tr>");

//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</tbody>");

//Aquí cerramos nuestra tabla
document.write("</table>");

//Calculo de estimación de la nota3 para aprobar el tercer ramo
nota9 = parseFloat(notaAprobacion * 3 - nota7 - nota8).toFixed(2);

//Mensaje de aprobacion del tercer ramo
document.write("<p>Para aprobar el ramo " + ramo3 + 
                " con nota "+ notaAprobacion +
                ", necesitas obtener un "+ nota9 + 
                " en la nota 3.</p>")

//Aquí cerramos nuestro div contenedor
document.write("</div>");


