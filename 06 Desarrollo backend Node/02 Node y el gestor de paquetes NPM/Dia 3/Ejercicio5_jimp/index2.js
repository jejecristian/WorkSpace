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
        img.writeAsync('fotoEjemplo.jpg')
        .then(()=>{
            response.write('Se guardo la imagen exitosamente...')
            response.end()
        })
        .catch((err)=>{
            console.log(err)
            response.write('Ha ocurrido un erro al guardar la imagen...')
            response.end()
        })
    })
})

server.listen(port, () => console.log(`http://localhost:${port}`))



