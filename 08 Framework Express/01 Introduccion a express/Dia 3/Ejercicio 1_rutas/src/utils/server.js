const express = require('express');

const app = express();
app.listen(process.env.PORT || 3_000);

// app.use(express.static('./node_modules', { root: process.cwd() }));
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist', { root: process.cwd() }));
app.use('/jquery', express.static('./node_modules/jquery/dist', { root: process.cwd() }));
app.use('/assets', express.static('./public/assets', { root: process.cwd() }));

app.get('/', (req, res) => res.sendFile('./public/index.html', { root: process.cwd() }));


app.all('*', (req, res) => res.status(404).json({ code: 404, message: 'Pagina no encontrada' }));

module.exports = { app };