Algoritmo EjercicioPropuesto3b
	nombre = ''
	nota = 0
	contador = 1
	acumulador = 0
	promedio = 0
	Escribir 'Promedio de cinco notas'
	Escribir 'Ingrese su nombre: '
	Leer nombre
	Escribir 'Hola '+ nombre + '!!!'
	Repetir
		Escribir 'Ingrese nota: ',contador
		Leer nota
		contador = contador + 1
		acumulador = acumulador + nota
	Hasta Que contador >= 6
	promedio = (acumulador / 5)
	Escribir 'El promedio de notas es:  ', promedio
FinAlgoritmo
