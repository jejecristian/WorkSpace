const http = require('http')

const local = 'http://localhost'
const port = 3000

const server = http.createServer((request, response) => {
    request.url == '/saludo' ? response.write('Hola como estas') : response.write('ruta no encontrada')
    response.end()
})

server.listen(port, () => console.log(`${local}:${port}`))

