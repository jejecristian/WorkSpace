// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function ejerciciopropuesto2() {
	var nombre, numedodos, numerodos, numerouno, resultado;
	nombre = "";
	numerouno = 0;
	numedodos = 0;
	resultado = 0;
	document.write("mi primer algoritmo",'<BR/>');
	document.write("ingrese su nombre: ",'<BR/>');
	nombre = prompt();
	document.write("Hola "+nombre+"!!!",'<BR/>');
	document.write("Ingrese un numero",'<BR/>');
	numerouno = Number(prompt());
	document.write("Ingrese otro numero",'<BR/>');
	numerodos = prompt();
	document.write("la suma de los numeros es = ",(numerouno+numerodos),'<BR/>');
	document.write("la resta de los numeros es = ",(numerouno-numerodos),'<BR/>');
	document.write("la multiplicacion es = ",(numerouno*numerodos),'<BR/>');
	document.write("la division es = ",(numerouno/numerodos),'<BR/>');
	document.write("el modulo es = ",(numerouno%numerodos),'<BR/>');
	resultado = ((numerouno+numedodos)/2);
	document.write("el promedio es = ",resultado,'<BR/>');
	document.write("el promedio es = "+String(resultado),'<BR/>');
}

