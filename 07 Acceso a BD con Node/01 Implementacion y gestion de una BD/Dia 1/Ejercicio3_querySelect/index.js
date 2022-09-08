const { Client } = require('pg');

const config = {
  connectionString: 'postgresql://postgres:postgres@localhost:5432/jeans'
};

const client = new Client(config);

// Test de conexión
// client.connect()
// .then(()=>{
//   console.log('Conectado...');
//   client.end();
// })
// .catch((error)=>console.log(`Conexión fallida ${error}`));

client.connect();
client.query('select now();', (error, result)=> {
  console.log(error);
  console.log(result.rows);
  client.end();
});