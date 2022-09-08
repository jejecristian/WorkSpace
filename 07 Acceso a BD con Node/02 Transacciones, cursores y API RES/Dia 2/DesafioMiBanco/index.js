/*
Integrantes:
- Daniela Saavedra
- Elizabeth Ramirez
- Romina Rios
- Jorge Leiva
- Cristian Torres
*/

const { Pool } = require('pg');

const Cursor = require('pg-cursor');

const chalk = require('chalk');

const [query, descripcion, fecha, monto, cuenta] = process.argv.slice(2)

const config = {
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'banco'
}

const pool = new Pool(config);

/*
Crear una función asíncrona que registre una nueva transacción utilizando valores
ingresados como argumentos en la línea de comando. 
Debe mostrar por consola la última transacción realizada.
*/
/*En caso de haber un error en la transacción, se debe retornar el error por consola.*/
const createTran = async (descripcion, fecha, monto, cuenta) => {
  let client;
  try {
    client = await pool.connect();
    await client.query('BEGIN;');
    const resSel = await client.query({ text: 'SELECT id FROM cuentas WHERE id = $1;', values: [cuenta] });
    if (resSel.rowCount >= 1) {
      const resIns = await client.query({
        text: `INSERT INTO transacciones (descripcion, fecha, monto, cuenta) 
               VALUES ($1, $2, $3, $4) 
               RETURNING *;`,
        values: [descripcion, fecha, monto, cuenta]
      });
      if (resIns.rowCount >= 1) {
        const resUpd = await client.query({
          text: 'UPDATE cuentas SET saldo = saldo + $1 WHERE id = $2 RETURNING *;',
          values: [monto, cuenta]
        });
        console.log(resIns.rows);
        console.log(resUpd.rows);
      } else {
        console.log('No se pudo realizar la transaccion...');
      }
    } else {
      console.log('No existe la cuenta destino para la transaccion...');
    }
    await client.query('COMMIT;');
  } catch ({ code, message }) {
    if (client) await client.query('ROLLBACK;');
    console.log({ code, message });
  } finally {
    if (client) client.release(pool.end);
  }
};

/*
Realizar una función asíncrona que consulte la tabla de transacciones y retorne
máximo 10 registros de una cuenta en específico. Debes usar cursores para esto.
*/
const readTran = async (cuenta) => {
  let client, cursor;
  try {
    client = await pool.connect();
    cursor = await client.query(new Cursor('SELECT * FROM transacciones WHERE cuenta = $1;', [cuenta]));
    const result = await cursor.read(10);
    console.log(result);
  } catch ({ code, message }) {
    console.log({ code, message });
  } finally {
    if (cursor) cursor.close();
    if (client) client.release(pool.end);
  }
};

/*
Realizar una función asíncrona que consulte el saldo de una cuenta y que sea
ejecutada con valores ingresados como argumentos en la línea de comando.
Debes usar cursores para esto.
*/
const readTranByCta = async (cuenta) => {
  let client, cursor;
  try {
    client = await pool.connect();
    cursor = await client.query(new Cursor('SELECT saldo FROM cuentas WHERE id = $1;', [cuenta]));
    const result = await cursor.read();
    console.log(result);
  } catch ({ code, message }) {
    console.log({ code, message });
  } finally {
    if (cursor) cursor.close();
    if (client) client.release(pool.end);
  }
};

const validarDatos = () => {
  if (!descripcion) {
    console.log(chalk.bgYellow.black('No se ha ingresado un descripcion...'));
    return false
  }
  else if (!fecha) {
    console.log(chalk.bgYellow.black('No se ha ingresado una fecha...'));
    return false
  }
  else if (!monto) {
    console.log(chalk.bgYellow.black('No se ha ingresado un monto...'));
    return false
  }
  else if (!cuenta) {
    console.log(chalk.bgYellow.black('No se ha ingresado una cuenta...'));
    return false
  }
  return true
}

if (query === 'registrar') {
  if (validarDatos()) {
    createTran(descripcion, fecha, monto, cuenta);
  }
}
else if (query === 'transacciones') {
  const [cuentaTran] = process.argv.slice(3);
  cuentaTran ? readTran(cuentaTran) : console.log(chalk.bgYellow.black('No se ha ingresado una cuenta...'));
}
else if (query === 'cuentas') {
  const [id] = process.argv.slice(3);
  id ? readTranByCta(id) : console.log(chalk.bgYellow.black('No se ha ingresado una cuenta...'));
}
else {
  console.log(chalk.bgRed.white('No se ha especificado un comando válido.'));
}