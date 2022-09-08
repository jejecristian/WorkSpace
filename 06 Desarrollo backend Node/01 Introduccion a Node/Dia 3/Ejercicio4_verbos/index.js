const http = require('http')
const url = require('url')

const local = 'http://localhost'
const port = 3000
const users = [
    {
        rut: '1-9',
        name: 'Pedro',
        lastname: 'Kenobi',
        age: 34,
        email: 'pedrokenobi@mail.cl'
    },
    {
        rut: '1-7',
        name: 'Juan',
        lastname: 'Skywalker',
        age: 34,
        email: 'juanskywalker@mail.cl'
    }
]

const server = http.createServer((request, response) => {
    const params = url.parse(request.url, true).query

    if (request.url.startsWith('/user?rut')) {
        const rut = params.rut
        const user = users.find((u) => u.rut === rut)
        user ? response.write(JSON.stringify(user)) : response.write('Usuario no encontrado')
    }

    response.end()
})

server.listen(port, () => console.log(`${local}:${port}`))

