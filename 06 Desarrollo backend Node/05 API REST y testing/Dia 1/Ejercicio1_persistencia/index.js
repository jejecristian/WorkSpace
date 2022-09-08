const fs = require('fs');

const miAuto = {
  marca: 'BMW',
  modelo: 'A50'
}

fs.writeFileSync('json/auto.json', JSON.stringify(miAuto), 'utf8')