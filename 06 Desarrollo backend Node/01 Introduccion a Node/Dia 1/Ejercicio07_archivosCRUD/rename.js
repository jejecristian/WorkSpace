const fs = require('fs')

fs.rename('bitacora.log', 'registro.log', (error)=>{
    if(error){
        return console.log('Ha ocurrido un error al cambiar el nombre del archivo...')
    }
    console.log('Se ha cambiado el nombre de forma exitosa...')
})