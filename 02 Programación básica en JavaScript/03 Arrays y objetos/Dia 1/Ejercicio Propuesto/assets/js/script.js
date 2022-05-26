/*
miArreglo = [1,2,3]
miArreglo = ['primer valor', 'segundo valor', 'tercer valor']
miArreglo[1]
miArreglo[4]
miArreglo[1]
*/

// declaracion de un arreglo, vector o array
let miArreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let miArregloDos = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
let miArregloTres = Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(`arreglo con [] ${miArreglo}`)
console.log(`arreglo con new Array ${miArregloDos}`)
console.log(`arreglo con Array ${miArregloTres}`)
//-----------------------------------------------------------------------------
let miArregloMixto = ['string', 1, 1.5, true, {}, ['otro', 'arreglo']]
console.log(`arreglo mixto -> ${miArregloMixto}`)
//-----------------------------------------------------------------------------
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
]
console.log('matriz 3x5 ->', matriz)
console.log('matriz 3x5')
console.log(matriz[0])
console.log(matriz[1])
console.log(matriz[2])
//-----------------------------------------------------------------------------
let arregloVacio = []
let arregloString = ['arreglo', 'de', 'string']
let arregloBoolean = [true, false]
let arregloNumeroEntero = [1, 2, 3, 4, 5]
let arregloNumerosDecimales = [1.0, 1.1, 1.2, 1.3]
//-----------------------------------------------------------------------------
let objeto = {
    numero: 1
}
console.log('objeto ->', objeto)
//-----------------------------------------------------------------------------
let arregloObjetos = [{ numero: 5 }, { nombre: 'rodrigo' }, {}]
console.log(`arregloObjetos -> ${arregloObjetos}`)
console.log('arregloObjetos -> ', arregloObjetos)
//-----------------------------------------------------------------------------
let arregloObjetosDos = [{ numero: 5 }, { nombre: 'rodrigo' }, {}]
console.log(`largo arregloObjetos -> ${arregloObjetosDos.length}`)
console.log('largo arregloObjetos -> ', arregloObjetosDos.length)
//-----------------------------------------------------------------------------
let vectorCiclo = [1, 2, 3, 4, 5]
let posicion = 0
console.log('WHILE:')
document.write('<h3>WHILE:</h3>')
while (posicion < vectorCiclo.length) {
    console.log(`el vectorCiclo en la posicion ${posicion} tiene el valor ${vectorCiclo[posicion]}`)
    document.write(`<p>el vectorCiclo en la posicion ${posicion} tiene el valor ${vectorCiclo[posicion]}</p>`)
    posicion++
}
console.log('DO WHILE:')
document.write('<h3>DO WHILE:</h3>')
posicion = 0
do {
    console.log(`el vectorCiclo en la posicion ${posicion} tiene el valor ${vectorCiclo[posicion]}`)
    document.write(`<p>el vectorCiclo en la posicion ${posicion} tiene el valor ${vectorCiclo[posicion]}</p>`)
    posicion++
} while (posicion < vectorCiclo.length)
console.log('FOR:')
document.write('<h3>FOR:</h3>')
for (let i = 0; i < vectorCiclo.length; i++) {
    console.log(`el vectorCiclo en la posicion ${i} tiene el valor ${vectorCiclo[i]}`)
    document.write(`<p>el vectorCiclo en la posicion ${i} tiene el valor ${vectorCiclo[i]}</p>`)
}
//-----------------------------------------------------------------------------
let vectorBrujo = [10,50,5,0,20,11,60,3,2]

