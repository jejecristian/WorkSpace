const http = require('http');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const url = require('url');
const chalk = require('chalk');
const getUser = require('./user.js');
require('dotenv').config();
const { enviar } = require('./mailer.js');

const port = process.PORT || 3_000;

const server = http.createServer(async (request, response) => {
  if (request.url === '/' && request.method === 'GET') {
    try {
      if (!fs.existsSync('src/data_roommates/roommates.json')) {
        fs.writeFileSync('src/data_roommates/roommates.json', JSON.stringify({ "roommates": [], "gastos": [] }));
      }
      const file = fs.readFileSync('src/public/index.html');
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(file);
      response.end();
    } catch (error) {
      response.writeHead(503, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ code: 503, message: error.message }));
    }
  }
  else if (request.url === '/roommates' && request.method === 'GET') {
    try {
      if (!fs.existsSync('src/data_roommates/roommates.json')) {
        fs.writeFileSync('src/data_roommates/roommates.json', JSON.stringify({ "roommates": [], "gastos": [] }));
      }
      const file = JSON.parse(fs.readFileSync('src/data_roommates/roommates.json', 'utf8'));
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(file));
    } catch (error) {
      response.writeHead(500, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ code: 500, message: error.message }));
    }
  }
  else if (request.url === '/roommate' && request.method === 'POST') {
    try {
      if (!fs.existsSync('src/data_roommates/roommates.json')) {
        fs.writeFileSync('src/data_roommates/roommates.json', JSON.stringify({ "roommates": [], "gastos": [] }));
      }
      const user = await getUser();
      let file = JSON.parse(fs.readFileSync('src/data_roommates/roommates.json', 'utf8'));
      file.roommates.push(user);
      file = await calcularMontos(file);
      fs.writeFileSync('src/data_roommates/roommates.json', JSON.stringify(file));
      response.writeHead(201, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(file));
    } catch (error) {
      console.log(error);
      response.writeHead(500, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ code: 500, message: error.message }));
    }
  }
  else if (request.url === '/gastos' && request.method === 'GET') {
    try {
      if (!fs.existsSync('src/data_roommates/roommates.json')) {
        fs.writeFileSync('src/data_roommates/roommates.json', JSON.stringify({ "roommates": [], "gastos": [] }));
      }
      const file = JSON.parse(fs.readFileSync('src/data_roommates/roommates.json', 'utf8'));
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(file));
    } catch (error) {
      response.writeHead(500, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ code: 500, message: error.message }));
    }
  }
  else if (request.url === '/gasto' && request.method === 'POST') {
    try {
      if (!fs.existsSync('src/data_roommates/roommates.json')) {
        fs.writeFileSync('src/data_roommates/roommates.json', JSON.stringify({ "roommates": [], "gastos": [] }));
      }
      let body = '';
      request.on('data', (chunk) => body += chunk);
      request.on('end', async () => {
        body = JSON.parse(body);
        body.id = uuidv4().slice(30);
        let file = JSON.parse(fs.readFileSync('src/data_roommates/roommates.json', 'utf8'));
        const objUser = file.roommates.find((u) => u.nombre === body.roommate);
        body.userId = objUser.id;
        file.gastos.push(body);
        file = await calcularMontos(file);
        const correos = file.roommates.map(roommate => roommate.email);
        correos.push('jejecristian@gmail.com'); // SE AGREGA CORREO PERSONAL AL ARREGLO DE CORREOS DE ROOMMATES
        const mensaje = `Nombre: ${body.roommate} - Descripción: ${body.descripcion} - Monto: ${body.monto}`
        await enviar(correos, mensaje);
        fs.writeFileSync('src/data_roommates/roommates.json', JSON.stringify(file));
        response.writeHead(201, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(file));
      });
    } catch (error) {
      response.writeHead(500, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ code: 500, message: error.message }));
    }
  }
  else if (request.url.startsWith('/gasto?id=') && request.method === 'DELETE') {
    try {
      const { id } = url.parse(request.url, true).query;
      if (!fs.existsSync('src/data_roommates/roommates.json')) {
        fs.writeFileSync('src/data_roommates/roommates.json', JSON.stringify({ "roommates": [], "gastos": [] }));
      }
      let file = JSON.parse(fs.readFileSync('src/data_roommates/roommates.json', 'utf8'));
      file.gastos = file.gastos.filter((g) => g.id !== id);
      file = await calcularMontos(file);
      fs.writeFileSync('src/data_roommates/roommates.json', JSON.stringify(file));
      response.writeHead(201, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(file));
    } catch (error) {
      response.writeHead(500, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ code: 500, message: error.message }));
    }
  }
  else if (request.url.startsWith('/gasto?id=') && request.method === 'PUT') {
    try {
      if (!fs.existsSync('src/data_roommates/roommates.json')) {
        fs.writeFileSync('src/data_roommates/roommates.json', JSON.stringify({ "roommates": [], "gastos": [] }));
      }
      let body = '';
      request.on('data', (chunk) => body += chunk);
      request.on('end', async () => {
        body = JSON.parse(body);
        console.log(body);
        const { id } = url.parse(request.url, true).query;
        let file = JSON.parse(fs.readFileSync('src/data_roommates/roommates.json', 'utf8'));
        file.gastos.find((g) => {
          if (g.id === id) {
            const { roommates } = JSON.parse(fs.readFileSync('src/data_roommates/roommates.json', 'utf8'));
            const objUser = roommates.find((u) => u.nombre === body.roommate);
            body.userId = objUser.id;
            g.roommate = body.roommate;
            g.descripcion = body.descripcion;
            g.monto = body.monto;
            g.userId = body.userId;
          }
        });
        file = await calcularMontos(file);
        fs.writeFileSync('src/data_roommates/roommates.json', JSON.stringify(file));
        response.writeHead(201, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(file));
      });
    } catch (error) {
      response.writeHead(500, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ code: 500, message: error.message }));
    }
  }
  else {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ code: 404, message: 'Page not found' }));
    response.end();
  }
}).listen(port, console.log(chalk.bgBlue.yellow(`Servidor en linea: \nhttp://localhost:${port}`)));

const calcularMontos = async (file) => {
  file.roommates.forEach(roommate => {
    roommate.debe = 0;
    roommate.recibe = 0;
  });
  file.gastos.forEach(gasto => {
    const monto = gasto.monto;
    const montoPorCadaUno = monto / file.roommates.length
    file.roommates.forEach(roommate => {
      if (roommate.id === gasto.userId) { //Es el usuario que gastó
        roommate.debe += 0;
        roommate.recibe += montoPorCadaUno * (file.roommates.length - 1);
      } else { //No es el usuario que gastó
        roommate.debe += montoPorCadaUno;
        roommate.recibe += 0;
      }
    });
  });
  return file;
};