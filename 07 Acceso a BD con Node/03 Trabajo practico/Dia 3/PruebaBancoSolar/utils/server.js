const http = require('http');
const fs = require('fs');
const url = require('url');
const moment = require('moment');
const { createUser, readUsers, updateUser, deleteUser, createTransfer, readTransfer } = require('./pg.js');
require('dotenv').config();
const port = process.PORT || 3_000;

const server = http.createServer(async (request, response) => {
  // / GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba.
  if (request.url === '/' && request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    const file = fs.readFile('public/index.html', 'utf8', (error, file) => {
      if (error) {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify({ code: 404, message: 'No se pudo abrir archivo html.' }));
      }
      response.end(file);
    });
  }
  // /usuario POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL.
  else if (request.url === '/usuario' && request.method === 'POST') {
    let body = '';
    request.on('data', (chunk) => body += chunk);
    request.on('end', async () => {
      const data = JSON.parse(body);
      if (Number(data.nombre) || !Number(data.balance)) {
        response.writeHead(406, { 'Content-Type': 'application/json' })
        return response.end(JSON.stringify({ code: 406, message: 'Debe ingresar datos válidos.' }));
      }
      const result = await createUser(Object.values(data));
      response.writeHead(result?.code ? 500 : 201, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(result.rows));
    });
  }
  // /usuarios GET: Devuelve todos los usuarios registrados con sus balances.
  else if (request.url === '/usuarios' && request.method === 'GET') {
    const result = await readUsers();
    response.writeHead(result?.code ? 500 : 200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result.rows));
  }
  // /usuario PUT: Recibe los datos modificados de un usuario registrado y los actualiza.
  else if (request.url.startsWith('/usuario?id=') && request.method === 'PUT') {
    const { id } = url.parse(request.url, true).query;
    let body = '';
    request.on('data', (chunk) => body += chunk);
    request.on('end', async () => {
      const data = JSON.parse(body);
      const datos = [id, ...Object.values(data)];
      const result = await updateUser(datos);
      response.writeHead(result?.code ? 500 : 201, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(result));
    });
  }
  // /usuario DELETE: Recibe el id de un usuario registrado y lo elimina .
  else if (request.url.startsWith('/usuario?id=') && request.method === 'DELETE') {
    const { id } = url.parse(request.url, true).query;
    const result = await deleteUser([id]);
    response.writeHead(result?.code ? 500 : 202, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(result));
  }
  // /transferencia POST: Recibe los datos para realizar una nueva transferencia. Se debe
  // ocupar una transacción SQL en la consulta a la base de datos.
  else if (request.url === '/transferencia' && request.method === 'POST') {
    let body = '';
    request.on('data', (chunk) => body += chunk);
    request.on('end', async () => {
      const data = JSON.parse(body);
      if (data.emisor === data.receptor) {
        response.writeHead(406, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify({ code: 406, message: 'No esta permitido transferir entre el mismo usuario.' }));
      } else if (!Number(data.monto)) {
        response.writeHead(406, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify({ code: 406, message: 'Ingrese un monto válido.' }));
      }
      const datos = [...Object.values(data), `${moment().format("L")} ${moment().format("LTS")}`];
      const result = await createTransfer(datos);
      response.writeHead(result?.code ? 500 : 201, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(result));
    });
  }
  // /transferencias GET: Devuelve todas las transferencias almacenadas en la base de
  // datos en formato de arreglo.
  else if (request.url === '/transferencias' && request.method === 'GET') {
    const result = await readTransfer();
    response.writeHead(result?.code ? 500 : 200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result.rows));
  }
  else {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ code: 404, message: 'Pagina no encontrada' }));
  }
}).listen(port, () => console.log('Servidor activo en http://localhost:3000'));

module.exports = server;