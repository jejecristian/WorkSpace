const fs = require('fs')

fs.unlink('registro.log', (err)=>{
    if(err){
        return console.log('error al eliminar el archivo')
    }
    console.log('Archivo eliminado con exito...')
})