/*
1. El servidor debe ser levantado por instrucción de una aplicación Node que use el
paquete Yargs para capturar los argumentos en la línea de comando.
Se deberá ejecutar el comando para levantar el servidor solo si el valor de la propiedad
“key” es la correcta (123).
2. El servidor debe disponibilizar una ruta raíz que devuelva un HTML con el formulario
para el ingreso de la URL de la imagen a tratar.
3. Los estilos de este HTML deben ser definidos por un archivo CSS alojado en el
servidor.
4. El formulario debe redirigir a otra ruta del servidor que deberá procesar la imagen tomada 
por la URL enviada del formulario con el paquete Jimp. La imagen debe ser procesada en 
escala de grises, con calidad a un 60% y redimensionada a unos 350px de ancho.
Posteriormente debe ser guardada con nombre “newImg.jpg” y devuelta al cliente.
*/

const http = require('http')
const url = require('url')
const fs = require('fs')
const yargs = require('yargs')
const Jimp = require('jimp')

const port = 3_000

const server = http.createServer((request, response) => {
    const param = url.parse(request.url, true).query
    if (request.url.startsWith('/rapidshare?urlImg=')) {
        const { urlImg } = param
        Jimp.read(urlImg, (err, img) => {
            if (err) {
                response.write('<h1>El enlace recibido no es valido.</h1><br><button onclick="history.back()">Volver</button>')
                return response.end()
            }
            img.grayscale().quality(60).resize(350, Jimp.AUTO)
            try {
                img.writeAsync('public/assets/img/newImg.jpg')
            } catch (error) {
                response.write('<h1>No se ha podido guardar la imagen.</h1><br><button onclick="history.back()">Volver</button>')
                return response.end()
            }
            img.getBase64(Jimp.MIME_JPEG, (err, src) => {
                if (err) {
                    response.write('<h1>No se ha podido cargar la imagen.</h1><br><button onclick="history.back()">Volver</button>')
                    return response.end()
                }
                fs.readFile('public/index.html', 'utf8', (err, htmlFile) => {
                    if (err) {
                        response.writeHead(404, { 'Content-Type': 'application/json' })
                        response.write(JSON.stringify({ code: 404, err }))
                        response.end()
                    }
                    response.writeHead(200, { 'Content-Type': 'text/html' })
                    response.write(`<img src="${src}" alt="newImg.jpg">`)
                    response.end(htmlFile)
                })
            })
        })
    } else if (request.url === '/') {
        fs.readFile('public/index.html', 'utf8', (err, htmlFile) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'application/json' })
                response.write(JSON.stringify({ code: 404, err }))
                response.end()
            }
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.end(htmlFile)
        })
    } else if (request.url === '/assets/css/style.css') {
        fs.readFile('public/assets/css/style.css', 'utf8', (err, cssFile) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'application/json' })
                response.write(JSON.stringify({ code: 404, err }))
                response.end()
            }
            response.writeHead(200, { 'Content-Type': 'text/css' })
            response.end(cssFile)
        })
    } else if (request.url === '/assets/js/script.js') {
        fs.readFile('public/assets/js/script.js', 'utf8', (err, jsFile) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'application/json' })
                response.write(JSON.stringify({ code: 404, err }))
                response.end()
            }
            response.writeHead(200, { 'Content-Type': 'text/js' })
            response.end(jsFile)
        })
    } else {
        response.writeHead(404, { 'Content-Type': 'application/json' })
        response.write(JSON.stringify({ code: 404, message: 'Page not found' }))
        response.end()
    }
})

yargs.command(
    'KEY_SERVER',
    'Valida el arranque del servidor en localhost puerto 3_000',
    {
        key: {
            describe: 'Argumento que recibe la key para levantar servidor',
            demand: true,
            alias: 'k'
        }
    },
    (argvs) => {
        if (argvs.key === 123) {
            return server.listen(port, () => {
                console.log('\nBienvenido...')
                console.log(`Servidor iniciado en http://localhost:${port} PID:${process.pid}`)
            })
        }
        console.log('Acceso denegado')
    }
).help().argv
