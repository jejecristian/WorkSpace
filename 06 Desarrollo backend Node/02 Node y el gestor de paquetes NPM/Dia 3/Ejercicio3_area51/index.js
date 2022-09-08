const yargs = require('yargs')
const child_process = require('child_process')

yargs.command(
    'area51',
    'Valida el ingreso al area 51',
    {
        password: {
            describe: 'Argumento que recibe la contraseña de acceso',
            demand: true,
            alias: 'pwd'
        }
    },
    (argvs) => {
        if (argvs.pwd === 123456) {
            return child_process.exec(`node area51_saludo.js`, (error, result)=>{
                if(error){
                    return console.log('Ha ocurrido un error al leer el archivo');
                }
                console.log(result.trim())
            });
        }
        console.log('Acceso denegado!');
    }
).help().argv

