require('dotenv').config();
const http = require('http');
const url = require('url');
const fs = require('fs');
const { resolve } = require('path');
const { enviar } = require('./mailer.js');

const port = process.env.PORT || 3_000;

const server = http.createServer((request, response) => {
  const params = url.parse(request.url, true).query;
  if (request.url === '/') {
    fs.readFile('public/index.html', 'utf8', (error, file) => {
      if (error) {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ status: 404, message: 'Archivo HTML no encontrado', err }));
        return response.end();
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    })
  }
  else if (request.url === '/assets/css/style.css') {
    fs.readFile('public/assets/css/style.css', 'utf8', (error, file) => {
      if (error) {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ status: 404, message: 'Archivo CSS no encontrado', err }));
        return response.end();
      }
      response.writeHead(200, { 'Content-Type': 'text/css' });
      response.end(file);
    })
  }
  else if (request.url === '/assets/js/script.js') {
    fs.readFile('public/assets/js/script.js', 'utf8', (error, file) => {
      if (error) {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ status: 404, message: 'Archivo CSS no encontrado', err }));
        return response.end();
      }
      response.writeHead(200, { 'Content-Type': 'text/js' });
      response.end(file);
    })
  }
  else if (request.url.startsWith('/enviar?')) {
    enviar(params)
      .then((result) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ status: 200, message: 'Correo enviado', result }));
        response.end();
      })
      .catch((err) => {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ status: 404, message: 'Error al enviar el correo', err }));
        response.end();
      });
  }
  else {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ status: 404, message: 'Page not Found' }));
    response.end();
  }
});

server.listen(port, () => {
  console.log(`http://localhost:${port} - PID: ${process.pid}`);
});

module.exports = { server };

