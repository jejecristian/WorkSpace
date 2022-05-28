// 1.- pedir el nombre completo del alumno
let nombreCompleto = prompt("Ingrese nombre completo del alumno", 'Obi Wan Kenobi')

// 2.- el nombre completo del alumno, separarlo y guardar los valores en un arreglo
let nomComplArray = nombreCompleto.split(" ")
console.log(nomComplArray)

// 3.- solicitar cuantas notas desea ingresar (debe ser mayor a 0)
var cantidadNotas = ''
let funCantidadNotas = () => {
    cantidadNotas = prompt("Indique la cantidad de notas que desea ingresar.\nDebe ser mayor a 0", 3)
    cantidadNotas = parseInt(cantidadNotas)
    if (cantidadNotas < 1) funCantidadNotas()
}
funCantidadNotas()
console.log(cantidadNotas)

var notasArray = new Array()
for (let i = 1; i <= cantidadNotas; i++) {
    let nota = prompt(`Ingrese la nota ${i}`, 4)
    notasArray.push(nota)
}
console.log(notasArray)

// 4.- dar la opción de eliminar la primera o ultima nota, en caso contrario omitir este paso
let funEliminaNota = () =>{
    var notaEliminada = prompt("Indique cual nota desea eliminar. \n1.-La primera nota \n2.- La ultima nota")
    if(notaEliminada == 1) {
        notasArray.shift()
    }else if(notaEliminada == 2){
        notasArray.pop()
    }else{
        funEliminaNota()
    }
}
funEliminaNota()
console.log(notasArray)

// 5.- mostrar el promedio
let suma = 0
for(nota of notasArray){
     suma += parseInt(nota)
}
let promedio = suma/notasArray.length
console.log(`El promedio es: ${promedio}`)