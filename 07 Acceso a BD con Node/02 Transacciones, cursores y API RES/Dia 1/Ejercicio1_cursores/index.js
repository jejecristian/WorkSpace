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

// * **********
// * CURSORES *
// * **********

const readCliente5 = async () => {
  let client, cursor;
  try {
    client = await pool.connect();
    cursor = client.query(new Cursor('SELECT * FROM usuarios;'));
    const result = await cursor.read(5);
    console.log(result);
  } catch ({code, message}) {
    console.log({code, message});
  } finally{
    if(cursor) cursor.close();
    if(client) client.release(pool.end);
  }
};
// readCliente5();

const readCliente20 = async () =>{
  let client, cursor;
  try {
    client = await pool.connect();
    cursor = client.query(new Cursor('SELECT * FROM usuarios;'));
    const result = await cursor.read(20);
    console.log(result);
  } catch ({code, message}) {
    console.log({code, message});
  }finally{
    if(cursor) cursor.close();
    if(client) client.release(pool.close);
  }
};
// readCliente20();

// Retornar solo los mails del dominio referido
// Query: SELECT * FROM usuarios WHERE email LIKE '%@hotmail.com';
const readHotmail = async (dominio) => {
  let client, cursor;
  try {
    client =  await pool.connect();
    cursor =  client.query(new Cursor('SELECT * FROM usuarios WHERE email LIKE $1;', [dominio]));
    const result = await cursor.read();
    console.log(result);
  } catch ({code, message}) {
    console.log({code, message});
  }finally{
    if(cursor) cursor.close();
    if(client) client.release(pool.end);
  }
};
readHotmail('%@hotmail.com');