const http = require('http');
const url = require('url');
const fs = require('fs');
const axios = require('axios');

const port = 3_000;
const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=150';

const getData = async (url) => {
  const { data } = await axios.get(url);
  return data;
}

const getPokeDex = async () => {
  try {
    const { results: listPokemons } = await getData(urlBase);
    const pokePromises = listPokemons.map(({ url }) => getData(url));
    const pokeDatas = await Promise.all(pokePromises);
    return pokeDatas.map(({ sprites, name }) => ({ img: sprites.front_default, nombre: name }));
  } catch (error) {
    const mensaje = `La API ha respondido con el siguiente error:  ${error.message}`
    console.log(mensaje);
    return [{ img: 404, nombre: mensaje }];
  }
}

const server = http.createServer(async (request, response) => {
  if (request.url === '/') {
    fs.readFile('public/index.html', 'utf8', (err, htmlFile) => {
      if (err) {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ code: 404, err }));
        return response.end();
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(htmlFile);
    })
  } else if (request.url === '/pokemones') {
    const rsPokeDex = await getPokeDex();
    if (rsPokeDex[0].img === 404) {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(rsPokeDex));
      return response.end();
    }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(rsPokeDex));
    response.end();
  } else {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ code: 404, message: 'Page not found' }));
    response.end();
  }
})

server.listen(port, () => {
  console.log(`Hosteando en http://localhost:${port} PID:${process.pid}`);
});
