const http = require('http')
const fs = require('fs')

const port = 3_000

const server = http.createServer((request, response) => {
    if (request.url === '/') {
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
    } else if (request.url === '/assets/js/index.js') {
        fs.readFile('public/assets/js/index.js', 'utf8', (err, jsFile) => {
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

server.listen(port, () => {
    console.log(`Hosteando en http://localhost:${port} PID:${process.pid}`)
})