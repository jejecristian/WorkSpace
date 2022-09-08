const { Client } = require('pg');

const config = {
  connectionString: 'postgres://postgres:postgres@localhost:5432/jeans'
};

const client = new Client(config);

const createRopa = async () => {
  client.connect();
  const result = await client.query(`INSERT INTO ropa (nombre, color, talla) values ('polera2', 'blanca', 'M') RETURNING *;`);
  console.log(result.rows);
  console.log(result.fields.map(f => f.name)); //devuelve un arregle con el nombre de todas las columnas de la tabla
  client.end();
};

const readRopa = async () => {
  client.connect();
  const result = await client.query(`SELECT * FROM ropa;`);
  console.log(result.rows);
  client.end();
};

const updateRopa = async () => {
  client.connect();
  const result = await client.query(`UPDATE ropa SET talla = 'L' WHERE id = 3 RETURNING *;`);
  console.log(result.rows);
  client.end();
}

const deleteRopa = async () => {
  client.connect();
  const result = await client.query(`DELETE FROM ropa;`);
  console.log(result.rowCount);
  client.end();
}

try {
  // createRopa();
  // readRopa();
  // updateRopa();
  deleteRopa();
} catch (error) {
  console.log(error);
};