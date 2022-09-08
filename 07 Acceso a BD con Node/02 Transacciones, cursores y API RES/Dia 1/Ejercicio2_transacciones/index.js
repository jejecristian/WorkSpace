const { Pool } = require('pg');
const Cursor = require('pg-cursor');

const config = {
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'clientes'
};

const pool = new Pool(config);

// * ***************
// * TRANSACCIONES *
// * ***************

const transferencia1 = async () => {
  let client;
  try {
    client = await pool.connect();
    await client.query('BEGIN');

    await client.query({
      text: 'UPDATE usuarios SET saldo = saldo - $2 WHERE email = $1;',
      values: ['fletcher.flosi@yahoo.com', 25_000]
    })

    await client.query({
      text: 'UPDATE usuarios SET saldo = saldo + $2 WHERE email = $1;',
      values: ['yuki_whobrey@aol.com', 25_000]
    })

    await client.query('COMMIT');
  } catch ({ code, message }) {
    if (client) await client.query('ROLLBACK');
    console.log({ code, message });
  } finally {
    if (client) client.release(pool.end);
  }
};
// transferencia1();

const transferencia2 = async (cuentaOrigen, cuentaDestino, monto) => {
  let client;
  try {
    client = await pool.connect();
    await client.query('BEGIN;');

    const results = await client.query({
      text: 'UPDATE usuarios SET saldo = saldo - $1 WHERE email = $2;',
      values: [monto, cuentaOrigen]
    });

    if (results.rowCount >= 1) {
      await client.query({
        text: 'UPDATE usuarios SET saldo = saldo + $1 WHERE email = $2;',
        values: [monto, cuentaDestino]
      });
    }else {
      console.log('La cuenta de origen no fue encontrada...');
    }

    await client.query('COMMIT;');
  } catch ({ code, message }) {
    if (client) await client.query('ROLLBACK;');
    console.log({ code, message });
  } finally {
    if (client) client.release(pool.end);
  }
};
transferencia2('bette_nicka@cox.net', 'vinouye@aol.com', 30_000);