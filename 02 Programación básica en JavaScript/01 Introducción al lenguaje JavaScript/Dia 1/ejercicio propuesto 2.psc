Algoritmo EjercicioPropuesto2
	nombre <- ''
	numeroUno <- 0
	numedoDos <- 0
	resultado <- 0
	Escribir 'mi primer algoritmo'
	Escribir 'ingrese su nombre: '
	Leer nombre
	Escribir 'Hola '+ nombre + '!!!'
	Escribir 'Ingrese un numero'
	Leer numeroUno
	Escribir 'Ingrese otro numero'
	Leer numeroDos
	Escribir 'la suma de los numeros es = ', (numeroUno + numeroDos)
	Escribir 'la resta de los numeros es = ', (numeroUno - numeroDos)
	Escribir 'la multiplicacion es = ', (numeroUno * numeroDos)
	Escribir 'la division es = ', (numeroUno / numeroDos)
	Escribir 'el modulo es = ', (numeroUno % numeroDos)
	resultado = ((numeroUno + numedoDos) /2)
	Escribir 'el promedio es = ', resultado
	Escribir 'el promedio es = ' + ConvertirATexto(resultado)
FinAlgoritmo
