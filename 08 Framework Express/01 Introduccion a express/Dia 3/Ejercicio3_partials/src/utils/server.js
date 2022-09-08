const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.listen(process.env.PORT || 3_000);

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');


// app.use(express.static('./node_modules', { root: process.cwd() }));
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist', { root: process.cwd() }));
app.use('/jquery', express.static('./node_modules/jquery/dist', { root: process.cwd() }));
app.use('/assets', express.static('./public/assets', { root: process.cwd() }));

app.get('/', (req, res) => res.render('home')); // renderiza la vista home
app.get('/contact', (req, res) => res.render('contact')); // renderiza la vista home
app.get('/galeria', (req, res) => res.render('galeria')); // renderiza la vista galeria


app.all('*', (req, res) => res.status(404).json({ code: 404, message: 'Pagina no encontrada' }));

module.exports = { app };