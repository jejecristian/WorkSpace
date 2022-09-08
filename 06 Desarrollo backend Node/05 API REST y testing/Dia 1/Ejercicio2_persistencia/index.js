const fs = require('fs');

// const yo = {
//   nombre: 'Raul',
//   apellido: 'Farias'
// };

// fs.writeFileSync('json/yo.json', JSON.stringify(yo));

// fs.writeFileSync('json/persona.json', JSON.stringify({name: 'Raul 2', lastname: 'Farias 2'}))

// devuelve un string
const file = fs.readFileSync('json/auto.json', 'utf8');
console.log(file);

// devuelve un objeto
const file2 = JSON.parse(fs.readFileSync('json/auto.json', 'utf8'));
console.log(file2);

