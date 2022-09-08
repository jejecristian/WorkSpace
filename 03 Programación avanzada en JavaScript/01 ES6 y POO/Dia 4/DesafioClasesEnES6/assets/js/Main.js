import Cliente from './Class/Cliente.js'
import Impuesto from './Class/Impuesto.js'

let miImpuesto = new Impuesto(10000, 8000)
let juan = new Cliente('Juan', miImpuesto)

console.log(juan)
console.log(`Cliente: ${juan.nombre}, Impuesto: ${juan.impuesto.montoBrutoAnual}, Deducciones: ${juan.impuesto.deducciones}`)
console.log(juan.calcularImpuesto())