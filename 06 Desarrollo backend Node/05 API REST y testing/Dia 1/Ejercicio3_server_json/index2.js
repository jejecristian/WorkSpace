const { fstat } = require('fs');
const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 3_000;

const server = http.createServer((request, response) => {
  if (request.url.startsWith('/nuevoUsuario?')) {
    const {name, lastname, email, password} = url.parse(request.url, true).query;
    const user = {name, lastname, email, password};

    console.log('soy el usuario que mandan en la url...', user);

    if (!fs.existsSync('json/users.json')) {
      fs.writeFileSync('json/users.json', JSON.stringify({ users: [] }));
      console.log('Se creo el fichero, porque no existia...');
    }

    const file = JSON.parse(fs.readFileSync('json/users.json', 'utf8'));
    console.log('soy el contenido del fichero users.json', file);

    file.users.push(user);
    console.log('Al contenido, le agregue el usuario enviado por la url', file);

    fs.writeFileSync('json/users.json', JSON.stringify(file));
    console.log(`Como no puedo modificar el archivo, lo sobrescribo con la data que lei, info antigua, 
    mas la nueva que la enviaron por la url...`);

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ code: 200, message: 'User add...' }));
    response.end();
  }
  else if(request.url.startsWith('/nuevoJuego?')){
    const { nombre, consola } = url.parse(request.url, true).query;
    const juego = { nombre, consola };
    if (!fs.existsSync('json/juegos.json')) {
      fs.writeFileSync('json/juegos.json', JSON.stringify({ juegos: [] }));
    }
    const file = JSON.parse(fs.readFileSync('json/juegos.json', 'utf8'));
    file.juegos.push(juego);
    fs.writeFileSync('json/juegos.json', JSON.stringify(file));
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ code: 200, message: 'Juego agregado...' }));
    response.end();
  }
  else {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ code: 404, message: 'Page not found' }));
    response.end();
  }
})

server.listen(port, () => {
  console.log(`http://localhost:${port} - PID: ${process.pid}`);
})