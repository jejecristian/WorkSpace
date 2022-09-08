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

const readUsers = async ()=>{
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

const updateUser = async (values)=>{
  let client;
  try {
    client = await pool.connect();
    await client.query({
      text:'UPDATE usuarios SET nombre = $2, balance = $3 WHERE id = $1;',
      values
    });
  } catch ({ code, message }) {
    return { code, message };
  } finally {
    if (client) client.release(pool.end);
  };
};

const deleteUser = async (values)=>{
  let client;
  try {
    client = await pool.connect();
    await client.query({
      text:'DELETE FROM usuarios WHERE id = $1;',
      values
    });
  } catch ({ code, message }) {
    return { code, message };
  } finally {
    if (client) client.release(pool.end);
  };
};

const createTransfer = async (values) => {
  let client;
  try {
    client = await pool.connect();
    await client.query({
      text: 'INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, $4);',
      values
    });
  } catch ({ code, message }) {
    return { code, message };
  } finally {
    if (client) client.release(pool.end);
  };
};

module.exports = { createUser, readUsers, updateUser, deleteUser, createTransfer };