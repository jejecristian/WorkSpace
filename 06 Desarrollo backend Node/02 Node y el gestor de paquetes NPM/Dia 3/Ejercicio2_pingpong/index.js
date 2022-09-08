const yargs = require('yargs')

// yargs.command().help().argv

yargs.command(
    'PING',
    'Comando para retornar un mensaje de PONG',
    {
        numero: {
            describe: 'Recibe un nunmero y retorna PONG concatenado con el numero',
            demand: true,
            alias: 'n'
        }
    },
    (argvs)=>{
        console.log(`PONG ${argvs.numero}`)
    }
).help().argv

// node index.js PING --numero=5
// node index.js PING --n=5