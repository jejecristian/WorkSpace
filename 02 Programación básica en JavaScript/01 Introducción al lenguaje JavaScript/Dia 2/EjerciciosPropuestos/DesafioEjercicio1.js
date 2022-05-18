// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function desafioejercicio1() {
	var nrodos, nrouno, resultado;
	nrouno = 0;
	nrodos = 0;
	resultado = 0;
	document.write("---Operaciones Matematicas---",'<BR/>');
	document.write("Se requieren que ingrese dos numeros.",'<BR/>');
	document.write("Ingrese el primer numero:",'<BR/>');
	nrouno = Number(prompt());
	document.write("Ingrese el segundo numero:",'<BR/>');
	nrodos = Number(prompt());
	resultado = nrouno+nrodos;
	document.write("La Suma es: ",resultado,'<BR/>');
	resultado = nrouno-nrodos;
	document.write("La Resta es: ",resultado,'<BR/>');
	resultado = nrouno/nrodos;
	document.write("La Division es: ",resultado,'<BR/>');
	resultado = nrouno*nrodos;
	document.write("La Multiplicacion es: ",resultado,'<BR/>');
	resultado = nrouno%nrodos;
	document.write("El Modulo es: ",resultado,'<BR/>');
	document.write("---Fin---",'<BR/>');
}

