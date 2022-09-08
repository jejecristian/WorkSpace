/*
Integrantes:
- Daniela Saavedra
- Elizabeth Ramirez
- Jorge Leiva
- Romina Rios
Cristian Torres

5. Ejecutar la aplicación desde un archivo externo con el módulo child_process
enviando los argumentos correspondientes y devolviendo por consola el contenido
del archivo luego de que haya sido creado.
*/
const child_process = require('child_process')

const [nombre, extension, indicador, pesos] = process.argv.slice(2)

child_process.exec(`node punto4.js ${nombre} ${extension} ${indicador} ${pesos}`, (error, result) => {
    if (error) {
        console.log(`Ha ocurrido un error al ejecutar el archivo.`)
    }
    console.log(result)
})
