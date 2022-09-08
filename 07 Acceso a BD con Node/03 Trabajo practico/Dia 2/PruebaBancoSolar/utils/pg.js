const { Pool } = require('pg');

const config = {
  user: 'postgres',
  password: 'postgres',
  port: 5432,
  database: 'bancosolar',
  host: 'localhost'
}

const pool = new Pool(config);

const createUser = async (values) => {
  let client;
  try {
    client = await pool.connect();
    await client.query({
      text: 'INSERT INTO usuarios (nombre, balance) VALUES ($1, $2);',
      values
    });
  } catch ({ code, message }) {
    return { code, message };
  } finally {
    if (client) client.release(pool.end);
  };
};

const readUsers = async () => {
  let client;
  try {
    client = await pool.connect();
    return await client.query('SELECT * FROM usuarios;');
  } catch ({ code, message }) {
    return { code, message };
  } finally {
    if (client) client.release(pool.end);
  };
};

const updateUser = async (values) => {
  let client;
  try {
    client = await pool.connect();
    await client.query({
      text: 'UPDATE usuarios SET nombre = $2, balance = $3 WHERE id = $1;',
      values
    });
  } catch ({ code, message }) {
    return { code, message };
  } finally {
    if (client) client.release(pool.end);
  };
};

const deleteUser = async (values) => {
  let client;
  try {
    client = await pool.connect();
    await client.query('BEGIN;');
    let result = await client.query({
      text: 'DELETE FROM transferencias WHERE emisor = $1 or receptor = $1;',
      values
    });
    if (result.rowCount >= 1) {
      result = await client.query({
        text: 'DELETE FROM usuarios WHERE id = $1;',
        values
      });
    }
    await client.query('COMMIT;');
    return result;
  } catch ({ code, message }) {
    if (client) await client.query('ROLLBACK;');
    return { code, message };
  } finally {
    if (client) client.release(pool.end);
  };
};

const createTransfer = async ([emisor, receptor, monto, fecha]) => {
  let client;
  try {
    client = await pool.connect();
    await client.query('BEGIN;');
    const result = await client.query({
      text: `INSERT INTO transferencias (emisor, receptor, monto, fecha) 
      VALUES ((select id from usuarios where nombre = $1), (select id from usuarios where nombre = $2), $3, $4)
      RETURNING *;`,
      values: [emisor, receptor, monto, fecha]
    });
    if (result.rowCount >= 1) {
      await client.query({
        text: 'UPDATE usuarios SET balance = balance - $2 WHERE nombre = $1 RETURNING *;',
        values: [emisor, monto]
      });
      await client.query({
        text: `update usuarios set balance = balance + $2 where nombre = $1 RETURNING *;`,
        values: [receptor, monto]
      });
    }
    await client.query('COMMIT;');
    return result;
  } catch ({ code, message }) {
    if (client) await client.query('ROLLBACK;');
    return { code, message };
  } finally {
    if (client) client.release(pool.end);
  };
};

const readTransfer = async () => {
  let client;
  try {
    client = await pool.connect();
    return await client.query({
      text: `SELECT t.id, ua.nombre emisor, ub.nombre receptor, t.monto, t.fecha 
      FROM transferencias t INNER JOIN usuarios ua ON (t.emisor = ua.id)
      INNER JOIN usuarios ub ON (t.receptor = ub.id);`,
      rowMode: 'array'
    });
  } catch ({ code, message }) {
    return { code, message };
  } finally {
    if (client) client.release(pool.end);
  };
};

module.exports = { createUser, readUsers, updateUser, deleteUser, createTransfer, readTransfer };