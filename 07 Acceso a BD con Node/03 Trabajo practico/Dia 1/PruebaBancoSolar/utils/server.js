const http = require('http');
const fs = require('fs');
const url = require('url');
const moment = require('moment');
const { createUser, readUsers, updateUser, deleteUser, createTransfer } = require('./pg.js');
require('dotenv').config();
const port = process.PORT || 3_000;

const server = http.createServer(async (request, response)=>{
// / GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba.
if(request.url === '/' && request.method === 'GET'){
  response.writeHead(200, {'Content-Type':'text/html'});
  response.end(fs.readFileSync('public/index.html','utf8'));
}
// /usuario POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL.
else if (request.url === '/usuario' && request.method === 'POST'){
  let body = '';
  request.on('data', (chunk) => body += chunk);
  request.on('end', async ()=>{
    const data = JSON.parse(body);
    await createUser(Object.values(data));
    response.end();
  });
}
// /usuarios GET: Devuelve todos los usuarios registrados con sus balances.
else if (request.url === '/usuarios' && request.method === 'GET'){
  const result = await readUsers();
  response.writeHead(200, {'Content-Type':'application/json'})
  response.end(JSON.stringify(result.rows));
}
// /usuario PUT: Recibe los datos modificados de un usuario registrado y los actualiza.
else if (request.url.startsWith('/usuario?id=') && request.method === 'PUT'){
  const { id } = url.parse(request.url, true).query;
  let body = '';
  request.on('data', (chunk) => body += chunk);
  request.on('end', async ()=>{
    const data = JSON.parse(body);
    const datos = [id, ...Object.values(data)];
    await updateUser(datos);
    response.end();
  });
}
// /usuario DELETE: Recibe el id de un usuario registrado y lo elimina .
else if (request.url.startsWith('/usuario?id=') && request.method === 'DELETE'){
  const { id } = url.parse(request.url, true).query;
  await deleteUser([id]);
  response.end();
}
// /transferencia POST: Recibe los datos para realizar una nueva transferencia. Se debe
// ocupar una transacción SQL en la consulta a la base de datos.
else if (request.url === '/transferencia' && request.method === 'POST'){
  let body = '';
  request.on('data', (chunk) => body += chunk);
  request.on('end', async ()=>{
    const data = JSON.parse(body);
    console.log(data);
    const dateFormat = moment(date).format("L");
    const timeFormat = moment(date).format("LTS");
    const fecha = `${dateFormat} ${timeFormat}`
    console.log(fecha);
    const datos = [...Object.values(data), fecha];
    console.log(datos);
    // await createTransfer();
    response.end();
  });
}
// /transferencias GET: Devuelve todas las transferencias almacenadas en la base de
// datos en formato de arreglo.
else if (request.url === '/transferencias' && request.method === 'GET'){
  console.log('/transferencias GET!');
  response.end();
}
else {
  response.writeHead(404, {'Content-Type':'application/json'});
  response.end(JSON.stringify({code: 404, message: 'Pagina no encontrada'}));
}
}).listen(port, ()=> console.log('Servidor activo en http://localhost:3000'));

module.exports = server;