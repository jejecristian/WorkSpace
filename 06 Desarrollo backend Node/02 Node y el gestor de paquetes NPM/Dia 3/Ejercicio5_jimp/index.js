const http = require('http')
const Jimp = require('jimp')
const port = 3000
const urlImg = 'https://randomuser.me/api/portraits/men/60.jpg'

const server = http.createServer((request, response) => {
    Jimp.read(urlImg, (err, img) => {
        if (err) {
            response.write('Ha ocurrido un error al leer la imagen')
            return response.end()
        }
        img
            .resize(250, Jimp.AUTO)
            .sepia()
            .getBase64(Jimp.MIME_JPEG, (err, src) => {
                if (err) {
                    response.write('No se ha podido cargar la imagen...')
                    return response.end()
                }
                response.writeHead(200, { 'Content-Type' : 'text/html' })
                response.write(`<img src="${src}" alt="img de ejemplo">`)
                response.end()
            })
    })
})

server.listen(port, () => console.log(`http://localhost:${port}`))



