const fs = require('fs')

fs.readFile('bitacora.log', 'utf8', (error, file)=>{
    if(error){
        return console.log('Ha ocurrido un error al leer el archivo...')
    }
    console.log(file)
})