const http = require('http')

const port = 3000
const server = http.createServer((request, response) => {

    // request.url == '/date' ? console.log(new Date()) : console.log('La ruta consultada no existe...')
    if(request.url == '/date'){
        console.log(new Date())
        response.write(`${new Date()}`)
    }else{
        console.log('La ruta consultada no existe...')
    }

    console.log(request.url)
    response.end()
})

server.listen(port, () => console.log(`http://localhost:${port}`))

