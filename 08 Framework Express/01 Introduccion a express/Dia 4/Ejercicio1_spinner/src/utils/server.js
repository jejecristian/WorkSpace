const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.listen(process.env.PORT || 3_000);

app.engine('hbs', exphbs.engine({
  extname:'hbs', // asigna un nuevo nombre de la extensión
  layoutsDir: './src/views/layouts', // Cambia el directorio de los layouts
  partialsDir: './src/views/partials' // Cambia el directorio de los partials
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('*/bootstrap', express.static('./node_modules/bootstrap/dist', { root: process.cwd() }));
app.use('*/jquery', express.static('./node_modules/jquery/dist', { root: process.cwd() }));
app.use('*/assets', express.static('./public/assets', { root: process.cwd() }));

app.get('/', (req, res) => res.render('home')); // renderiza la vista home
app.get('/contact', (req, res) => res.render('contact')); // renderiza la vista home
app.get('/galeria', (req, res) => {
  const usuarios = ['Cristian', 'Rodolfo', 'Daniela', 'Romina'];
  res.render('galeria', { usuarios, nombre: 'Raul' });
}); // renderiza la vista galeria
app.get('/spinner/:color', (req, res)=>{
  const colores = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  res.render('spinner', { color: req.params.color, colores });
});

app.all('*', (req, res) => res.status(404).json({ code: 404, message: 'Pagina no encontrada' }));

module.exports = { app };