//Ejercicio:
// Agregar 10 dias a la fecha de hoy, mostrando el nombre del dia

const moment = require('moment')

const fecha = moment().add(10, 'days').format('dddd')
console.log(fecha);

