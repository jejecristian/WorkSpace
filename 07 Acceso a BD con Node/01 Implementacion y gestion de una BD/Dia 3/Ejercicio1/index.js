const { Pool } = require('pg');

const config = {
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'jeans',
  max: 20,
  min: 2,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 2000
}

const pool = new Pool(config);

// * Test Connect
// pool.connect((error, client, release) => {
//   if (error) return console.log(error);
//   console.log('Conectado...');
//   release();
//   // pool.end();
// });

// * Select
// pool.connect((error, client, release) => {
//   if (error) return console.log(error);
//   client.query('SELECT * FROM ropa;')
//     .then((result) => {
//       console.log(result.rows);
//       release();
//       pool.end();
//     })
//     .catch((error) => {
//       console.log(error);
//       release();
//       pool.end();
//     });
// });

// * Select (async and await)
// pool.connect(async (error, client, release) => {
//   if (error) return console.log(error);
//   const result = await client.query('SELECT * FROM ropa;');
//   console.log(result.rows);
//   release();
//   pool.end();
// });

// * Select (inyeccion de dependencias)
// pool.connect(async (error, client, release) => {
//   if(error) return console.log(error);
//   const id = '5';

//   // ! Simula la info del FRONT - un formulario de registro por ejemplo
//   const idMalo = `'10'; DELETE FROM ropa WHERE id > '0'`;

//   // ! Forma incorrecta, inyeccion de dependencia
//   // const result = await client.query(`SELECT * FROM ropa WHERE id = '${idMalo}'`);

//   // * Forma correcta
//   const result = await client.query('SELECT * FROM ropa WHERE id = $1', [id]);
//   console.log(result.rows);
//   release();
//   pool.end();
// });

// * Insert
// pool.connect(async (error, client, release) => {
//   if (error) return console.log(error);
//   const result = await client.query(`INSERT INTO ropa (id, nombre, color, talla) 
//     VALUES(DEFAULT, $1, $2, $3) RETURNING *;`, ['calcetines', 'verdes', 'M']);
//   console.log(result.rows);
//   release();
//   pool.end();
// });

// * Insert JSON
// const createRopa = (nombre, color, talla) => {
//   pool.connect(async (error, client, release) => {
//     if (error) return console.log(error);
//     const result = await client.query({
//       text: 'INSERT INTO ropa (nombre, color, talla) VALUES ($1, $2, $3) RETURNING *;',
//       values: [nombre, color, talla]
//     });
//     console.log(result.rows);
//     release();
//     pool.end();
//   });
// };
// createRopa('Cinturon','Gris','98');

// * Insert JSON
// const createRopa2 = (nombre, color, talla) => {
//   pool.connect(async (error, client, release) => {
//     if (error) return console.log(error);
//     const result = await client.query({
//       text: 'INSERT INTO ropa (nombre, color, talla) VALUES ($1, $2, $3) RETURNING *;',
//       values: [nombre, color, talla],
//       rowMode: 'array'
//     });
//     console.log(result.rows);
//     release();
//     pool.end();
//   });
// };
// createRopa2('Cinturon','Rojo','99');

// const readRopa = () => {
//   pool.connect(async (error, client, release) => {
//     if (error) return console.log(error);
//     const result = await client.query({
//       text: 'SELECT * FROM ropa;',
//       rowMode: 'array'
//     });
//     console.log(result.rows);
//     release();
//     pool.end();
//   });
// };
// readRopa();

// * Prepare Statements
// const readRopaPS = () => {
//     pool.connect(async (error, client, release) => {
//       if (error) return console.log(error);
//       const result = await client.query({
//         text: 'SELECT * FROM ropa;',
//         name: 'Read-Ropa'
//       });
//       console.log(result.rows);
//       release();
//       pool.end();
//     });
//   };
// readRopaPS();

// * Codigo de Error
const readRopaCE = () => {
  pool.connect(async (error, client, release) => {
    if (error) return console.log(error.code);

    try {
      const result = await client.query({
        text: 'SELECT * FROM ropa;'
      });
      console.log(result.rows);
    } catch (error) {
      console.log(error.code);
    } finally{
      release();
      pool.end();
    }
  });
};
readRopaCE();