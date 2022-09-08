const { Client } = require('pg');

const config = {
  connectionString: 'postgresql://postgres:postgres@localhost:5432/jeans'
};

const client = new Client(config);

const readRopa = async () => {
  client.connect();
  const result = await client.query('select * from ropa;')
  console.log(result.rows);
  client.end();
}

readRopa();

