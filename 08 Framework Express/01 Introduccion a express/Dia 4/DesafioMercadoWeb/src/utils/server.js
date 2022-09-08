require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const chalk = require('chalk');
const port = process.env.PORT || 3_000;
const app = express();
app.listen(port, console.log(chalk.bgWhite.green(`Servidor en línea:\nhttp://localhost:${port}`)));

let productos = [
  { nombre: 'banana', opacity: 'opacity-100' },
  { nombre: 'cebollas', opacity: 'opacity-100' },
  { nombre: 'pimenton', opacity: 'opacity-100' },
  { nombre: 'papas', opacity: 'opacity-100' },
  { nombre: 'lechuga', opacity: 'opacity-100' },
  { nombre: 'tomate', opacity: 'opacity-100' }
];
const objDashboard = {
  bienvenida: 'Bienvenido al mercado WEB, seleccione sus productos',
  productos
};
let productosEnCarrito = [];

app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  layoutsDir: './src/views/layouts',
  partialsDir: './src/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');
app.use('*/bootstrap', express.static('./node_modules/bootstrap/dist', { root: process.cwd() }));
app.use('*/jquery', express.static('./node_modules/jquery/dist', { root: process.cwd() }));
app.use('*/img', express.static('./public/assets/img', { root: process.cwd() }));
app.get('/', (req, res) => res.render('Dashboard', objDashboard));
app.get('/agregar/:nombre', (req, res) => {
  productos.find(producto => {
    if (producto.nombre === req.params.nombre) {
      producto.opacity = 'opacity-50';
      productosEnCarrito.push({ nombre: producto.nombre });
    };
  });
  res.render('Dashboard', objDashboard);
});
app.get('/mostrar', (req, res) => {
  console.log('shegando');
  // objDashboard.productosEnCarrito = productosEnCarrito;
  console.log(objDashboard);
  res.render('Dashboard', objDashboard);
});
app.get('/quitar/:nombre', (req, res) => {
  productos.find(producto => {
    if (producto.nombre === req.params.nombre) {
      producto.opacity = 'opacity-100';
      productosEnCarrito = productosEnCarrito.filter(producto => producto.nombre === req.params.nombre);
    };
  });
  console.log(productos);
  console.log(productosEnCarrito);
  res.render('Dashboard', objDashboard);
});

app.get('*', (req, res) => res.status(404).json({ code: 404, message: 'Página no encontrada' }));
module.exports = { app };