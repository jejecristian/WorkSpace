const http = require('http')
const port = 3000

const server = http.createServer((request, response) => {
    response.end()
})

server.listen(port, () => {
    console.log(`Hosteando en http://localhost:${port} PID:${process.pid}`)
})


// Ejemplo comando en CMD:
// taskkill /F /PID <pid>
// taskkill /F /PID 3436