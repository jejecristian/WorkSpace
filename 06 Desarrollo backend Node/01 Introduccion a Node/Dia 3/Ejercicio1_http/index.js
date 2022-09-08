const http = require('http')

const port = 8080

// crea servidor
const server = http.createServer((request, response)=>{
    console.log('Hemos accedido al servidor...')
    response.end()
})

// escucha el servidor
server.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

