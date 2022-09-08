var persona = new Object()
persona.nombre = 'Jose'
persona.edad = 30
persona.nacimiento = '01 de enero'
persona.saludar = function(){console.log('Hola Mundo')}
persona.saludarNombre = function(){console.log('Hola mi nombre es ' + this.nombre)}

var persona = new Object()
persona.nombre = 'Jose'
persona.edad = 30
persona.nacimiento = '01 de enero'
persona.saludar = function(){console.log('Hola Mundo')}
persona.saludarNombre = function(){console.log('Hola mi nombre es ' + this.nombre)}

// // // Otra forma de crear un objeto es la siguiente:
// // persona = {
// //     nombre: 'Jose',
// //     edad: 30,
// //     nacimiento: '01 de enero',
// //     saludar: function(){console.log('Hola Mundo')}
// // }

// console.log(persona)

// // // Así seria la salida en json:
// // {
// //     nombre: 'Jose',
// //     edad: 30,
// //     nacimiento: '01 de enero'
// // }

// persona.nombre = 'Rodrigo'

// console.log(persona)

// persona.nombre = 123456789

// console.log(persona)

// persona['nombre'] = 'Romina'

// console.log(persona)

// persona.saludar()
// persona.saludarNombre()

// ************************************************************************************************************

// // Ejercicio propuesto: Crear un objeto con atributos y funcion
// var player = new Object()
// player.nickname = 'OMEGA'
// player.firstName = 'Cristian'
// player.lastName = 'Torres'
// player.games = ['League of Legends', 'Dota2', 'Real racing']
// player.printData = function(){console.log(`Apodo: ${this.nickname} \nNombre completo: ${this.firstName} ${this.lastName}`)}
// player.printGames = function(){console.log('Juegos preferidos: '+ this.games)}

// player.printData()
// player.printGames()

// ************************************************************************************************************
var persona = new Object()
persona.nombre
persona.edad
persona.nacimiento

// Metodo constructor:
function Persona(nombre, edad, nacimiento){
    this.nombre = nombre || "" // pai y comillas, indica que si viene nulo, se dejara el valor en vacio
    this.edad = edad || 0
    this.nacimiento = nacimiento
}

// Nueva instancia de Persona
var persona_1 = new Persona('Rodgrigo', 30, '01 de enero')

var persona_2 = new Persona('Jose', 50, '02 de enero')
console.log(persona_1.nombre)
console.log(persona.getNombre())
console.log(persona.setNombre('juanito perez'))
persona_1.nombre = 'juanito perez'
console.log(persona_1.nombre)
console.log(persona_2)

Persona.prototype.saludar = function(){console.log('holi, soy '+this.nombre)}

var persona = new Persona('nombre', 18, '03 de enero')

persona.saludar()
persona_1.saludar()