require('dotenv').config();

const express = require('express');

const port = process.env.PORT || 3_000;

const usuarios = [
  "Juan",
  "Jocelyn",
  "Astrid",
  "Maria",
  "Ignacia",
  "Javier",
  "Brian"
];

const app = express();

app.use(express.static('./public/assets/css', { root: process.cwd() }));
app.use(express.static('./public/assets/img', { root: process.cwd() }));

// A través de un middleware, verificar que el usuario escrito como parámetro existe en el arreglo alojado en el servidor.
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
  usuarios.find(usuario => usuario === req.params.usuario)
    ? next()
    : res.status(403).send('<img src="/who.jpeg" alt="Who is?"/>');
});
app.get('/abracadabra/juego/:usuario', (req, res) => res.sendFile('./public/index.html', { root: process.cwd() }));

// Se debe devolver un JSON con un arreglo de nombres alojado en el servidor.
app.get('/abracadabra/usuarios', (req, res) => res.status(200).json({ usuarios }));

/* Basado en un número aleatorio del 1 al 4, devolver la foto del conejo en caso de coincidir 
con el número recibido como parámetro ó devolver la foto de Voldemort en caso de no coincidir. */
app.get('/abracadabra/conejo/:n', (req, res) => {
  const rdm = Math.floor(Math.random() * (4 - 1) + 1);
  rdm === parseInt(req.params.n)
    ? res.status(200).send('<body style="background: linear-gradient(45deg, red, yellow, blue, red);"><img style="border-radius: 50%;margin: auto;display: block;" src="/conejito.jpg" alt="Conejito malo"/></body>')
    : res.status(200).send('<body style="background: #000;"><img style="border-radius: 5%;margin: auto;display: block;"src="/voldemort.jpg" alt="El que no debe ser nombrado"/></body>');
});

app.all('*', (req, res) => res.status(404).json({ code: 404, message: 'Esta página no existe' }));

app.listen(port, console.log(`Servidor en línea: \nhttp://localhost:${port}`));

module.exports = app;