const yargs = require('yargs')

// yargs.command(
//     'comando',
//     'desc',
//     {
//         param1: {
//             describe: '',
//             demand: true,
//             alias: 'al'
//         },
//         param2: {
//             describe: '',
//             demand: true,
//             alias: 'al'
//         }
//     },
//     ()=>{}
// ).help().argv

yargs.command(
    'adulto',
    'Metodo que valida la edad de una persona para saber si es adulto o no...',
    {
        edad: {
            describe: 'Argumento que recibe la edad de la persona',
            demand: true,
            alias: 'e'
        }
    },
    (argumentos) => { argumentos.edad >= 18 ? console.log('Usted es mayor de edad') : console.log('Usted es menor de edad') }
).help().argv

