//Ejercicio
// Extraer en un arreglo numeros pares y en otro impares

const _ = require('lodash')

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// SOLUCION JAVASCRIPT
// const pares = []
// const impares = []
// numeros.forEach((num)=>{
//     num % 2 ? impares.push(num) : pares.push(num)
// })
// console.log(pares, impares)

// SOLUCION CON LODASH
const newArray = _.partition(numeros, (num) => num % 2)
console.log(newArray);
// OTRA MANERA
const [impares, pares] = _.partition(numeros, (num) => num % 2)
console.log(impares, pares);