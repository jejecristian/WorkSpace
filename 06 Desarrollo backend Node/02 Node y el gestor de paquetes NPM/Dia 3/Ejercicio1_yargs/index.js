const yargs = require('yargs')

// yargs.command(
//     'comando',
//     'descripcion',
//     {
//         constructor:
//         {
//             param1: {
//                 describe: 'describe lo que recibe este parametro',
//                 demand: 'true o false',
//                 alias: 'ali'
//             }
//         }
//     },
//     (argvs) => {
//         console.log()
//      }
// ).help().argv

yargs.command(
    'saludo',
    'Comando para saludar...',
    {
        nombre: {
            describe: 'Recibe un nombre en formato String',
            demand: true,
            alias: 'nom'
        }
    },
    (argvs) => {
        console.log(`Hola, como estas ${argvs.nombre}`)
    }
).help().argv

// node index.js saludo --help
// node index.js saludo --nombre=Juan
// node index.js saludo -n=Juan
