const { Client } = require('pg');

const config = {
  connectionString: 'postgresql://postgres:postgres@localhost:5432/jeans'
};

const client = new Client(config);

client.connect()
  .then(()=>{
    console.log('Conectado...')
    client.end()
  })
  .catch((error)=>console.log(`Ha ocurrido un ${error}`));