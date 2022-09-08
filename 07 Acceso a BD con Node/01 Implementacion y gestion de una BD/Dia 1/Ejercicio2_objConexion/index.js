const { Client } = require('pg');

const config = {
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: '5432',
  database: 'jeans'
};

const client = new Client(config);

client.connect()
  .then(()=>{
    console.log('Conectado...')
    client.end()
  })
  .catch((error)=>console.log(`Ha ocurrido un ${error}`));