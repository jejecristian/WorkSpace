const http = require('http')
const url = require('url')
const fs = require('fs')

const port = 3000

const getFecha = () => {
    let hoy = new Date()
    return `${hoy.getDay() < 10 ? '0' + hoy.getDay() : hoy.getDay()}/${hoy.getMonth() < 10 ? '0' + hoy.getMonth() : hoy.getMonth()}/${hoy.getFullYear()}`
}

const printer = (mensaje) => `<p>${mensaje}</p><br><button onclick="history.back()">Volver</button>`

const server = http.createServer((request, response) => {
    const params = url.parse(request.url, true).query
    if (request.url.startsWith('/crear?archivo=')) {
        const { archivo, contenido } = params
        const fechaMasContenido = getFecha() + '\n' + contenido
        fs.writeFile(`files/${archivo}`, fechaMasContenido, 'utf8', (err) => {
            if (err) {
                response.write(printer('Ha ocurrido un error al guardar el archivo...'))
                return response.end()
            }
            response.write(printer('Archivo creado exitosamente...'))
            response.end()
        })
    } else if (request.url.startsWith('/leer?archivo=')) {
        const { archivo } = params
        fs.readFile(`files/${archivo}`, 'utf8', (err, data) => {
            if (err) {
                response.write(printer('Ha ocurrido un error al leer el archivo...'))
                return response.end()
            }
            response.write(printer(data))
            response.end()
        })
    } else if (request.url.startsWith('/renombrar?nombre=')) {
        const { nombre, nuevoNombre } = params
        fs.rename(`files/${nombre}`, `files/${nuevoNombre}`, (err) => {
            if (err) {
                response.write(printer('Ha ocurrido un error al renombrar el archivo...'))
                return response.end()
            }
            response.write(printer(`Archivo "${nombre}" fue renombrado como "${nuevoNombre}" exitosamente...`))
            response.end()
        })
    } else if (request.url.startsWith('/eliminar?archivo=')) {
        const { archivo } = params
        response.write(`<p>Tu solicitud para eliminar el archivo "${archivo}" se esta procesando<p>`)
        response.setTimeout(3000, () => {
            fs.unlink(`files/${archivo}`, (err) => {
                if (err) {
                    response.write(printer('Ha ocurrido un error al eliminar el archivo...'))
                    return response.end()
                }
                response.write(printer(`Archivo "${archivo}" fue eliminado exitosamente...`))
                response.end()
            })
        })
    }
    else {
        response.write(printer('404 not found'))
        response.end()
    }
})

server.listen(port, () => console.log(`Servidor operativo en: http://localhost:${port}`))