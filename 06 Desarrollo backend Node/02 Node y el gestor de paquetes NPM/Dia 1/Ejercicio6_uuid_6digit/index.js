// EJERCICIO:
// EXTRAER LOS ULTIMOS SEIS DIGITOS DE LA VERSION DE UUID

const {v4: uuidv4} = require('uuid')
const valor = uuidv4()

// version de uuid
console.log(valor)

// comenzando desde el principio
console.log(valor.slice(0, 30))

// comenzando desde el ultimo
console.log(valor.slice(-6))