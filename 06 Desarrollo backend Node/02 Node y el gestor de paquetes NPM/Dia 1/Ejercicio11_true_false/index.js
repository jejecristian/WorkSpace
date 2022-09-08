//Ejercicio
//Separar los que son logicamente verdaderos y luego los falsos

const _ = require('lodash')

const valores = [true, 0, null, undefined, '', 22, false]
const tablet = _.partition(valores, (valor) => valor)
const [verdaderos, falsos] = _.partition(valores, (valor) => valor)

console.table(tablet);
console.log(verdaderos, falsos);