require('dotenv').config();
const http = require('http');
const url = require('url');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { enviar } = require('./mailer.js');
const { getData } = require('./api.js');

const port = process.env.PORT || 3_000;

const server = http.createServer(async (request, response) => {
  if (request.url === '/') {
    fs.readFile('public/index.html', 'utf8', (error, html) => {
      if (error) {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ status: 404, message: 'Archivo HTML no encontrado', error }));
        return response.end();
      };
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(html);
    });
  }
  else if (request.url === '/assets/js/script.js') {
    fs.readFile('public/assets/js/script.js', 'utf8', (error, js) => {
      if (error) {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ status: 404, message: 'Archivo JS no encontrado', err }));
        return response.end();
      }
      response.writeHead(200, { 'Content-Type': 'text/js' });
      response.end(js);
    });
  }
  else if (request.url.startsWith('/mailing?correos=')) {
    const params = url.parse(request.url, true).query;
    // Destructura parametros y les define alias
    let { correos: to, asunto: subject, contenido: html, files } = params;
    // Crea adjunto a partir del html y 'files' enviado desde formulario
    const attachments = [];
    if(!files) {
      attachments.push({filename: 'adjunto.txt', content: 'No se adjuntaron archivos'}) 
    }else{
      attachments.push({ 
        filename: `${files.substring(0, files.length-4)}.html`,
        content: html,
        contentType: 'text/html'
      });
    }
    // Convierte el html que viene del formulario a texto
    let text = htmlToText(html);
    // Ejecuta instrucciones asincronas
    try {
      // Obtiene data de la api indicadores
      const data = await getData();
      if (!data) throw 'Error al obtener indicadores';
      // Invoca funciones que agrega indicadores en formato texto y html
      text += '\n' + addIndicadoresText(data);
      html += addIndicadoresHtml(data);
      // Invoca funcion para enviar correo pasando como argumento cada valor
      const result = await enviar(to.split(','), subject, text, html, attachments)
      if (!result) throw 'Error al enviar el correo';
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({ status: 200, message: 'Correo enviado exitosamente...' }));
      // Crea directorio 'correos' si este no existe
      if (!fs.existsSync('correos')) {
        fs.mkdirSync('correos');
      }
      // Guarda el correo enviado en un archivo en formato texto plano
      fs.writeFileSync(`correos/${uuidv4().slice(30)}.txt`, text, 'utf8');
    } catch (err) {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({ status: 404, message: err }));
    } finally {
      response.end();
    };
  }
  else {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ status: 404, message: 'Page not Found' }));
    response.end();
  };
});

server.listen(port, () => {
  console.log(`http://localhost:${port} - PID: ${process.pid}`);
});

const htmlToText = (html) => {
  let cadena = ''
  if ((html === null) || (html === '')) {
    return '';
  };
  html = html.toString();
  html = html.replace(/(<([^>]+)>)/ig, '¬¬');
  html = html.split('¬¬');
  html = html.filter(mensajes => mensajes != '')
  html.forEach((linea, index) => {
    index == 0 ? cadena += `${linea}` : cadena += `\n${linea}`;
  });
  return cadena;
};

const addIndicadoresText = (data) => {
  const { dolar, euro, uf, utm } = data;
  let indicadores = '\nHola! Los indicadores económicos de hoy son los siguientes:';
  indicadores += `\n\n\n\nEl valor del dolar el día de hoy es: ${dolar.valor}`;
  indicadores += `\n\nEl valor del euro el día de hoy es: ${euro.valor}`;
  indicadores += `\n\nEl valor de la uf el día de hoy es: ${uf.valor}`;
  indicadores += `\n\nEl valor de la utm el día de hoy es: ${utm.valor}`;
  return indicadores;
}

const addIndicadoresHtml = (data) => {
  const { dolar, euro, uf, utm } = data;
  let indicadores = '<p>Hola! Los indicadores económicos de hoy son los siguientes:</p>';
  indicadores += `<br><br><p>El valor del dolar el día de hoy es: ${dolar.valor}</p>`;
  indicadores += `<p>El valor del euro el día de hoy es: ${euro.valor}</p>`;
  indicadores += `<p>El valor de la uf el día de hoy es: ${uf.valor}</p>`;
  indicadores += `<p>El valor de la utm el día de hoy es: ${utm.valor}</p>`;
  return indicadores;
}

module.exports = { server };

