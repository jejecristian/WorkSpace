var persona = new Object();
persona.nombre = 'Jose';
persona.edad = 30;
persona.nacimiento = '01 de enero';
persona.saludar = function(){console.log('Hola Mundo!')};
persona.saludarNombre = function(){console.log('Hola mi nombre es ' + this.nombre)}

// persona = {
//     nombre: 'Jose',
//     edad: 30,
//     nacimiento: '01 de enero',
//     saludar: function(){console.log('Hola Mundo')}
// }

console.log(persona);

persona.nombre = 'Rodrigo';

console.log(persona);

persona.nombre = 123456789;

console.log(persona);

persona['nombre'] = 'Romina';

console.log(persona);

persona.saludar();
persona.saludarNombre();

// salida:
// {
//     nombre: 'Jose',
//     edad: 30,
//     nacimiento: '01 de enero'
// }

function Persona(nombre, edad, nacimiento){
    this.nombre = nombre;
    this.edad = edad;
    this.nacimiento = nacimiento;
}

var persona_1 = new Persona('Rodrigo',30,'01 de enero');
var persona_2 = new Persona('Jose',50,'02 de enero');
console.log(persona_1);
console.log(persona_2);