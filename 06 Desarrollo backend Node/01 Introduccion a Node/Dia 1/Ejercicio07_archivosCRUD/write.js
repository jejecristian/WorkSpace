const fs = require('fs')

fs.writeFile('bitacora.log', 'Hola mundo desde node js', 'utf8', (error)=>{
    if(error){
        return console.log('Ha ocurrido un error...')
    }
    console.log('Archivo creado con exito...')
})