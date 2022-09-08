const { Pool } = require('pg');
const chalk = require('chalk');

const [query, nombre, rut, curso, nivel] = process.argv.slice(2)

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'escuela',
  max: 20,
  min: 2,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000
});

const createEstudiante = (nombre, rut, curso, nivel) => {
  pool.connect(async (error, client, release) => {
    if (error) return console.log({ name: error.name, message: error.message, code: error.code });
    const result = await client.query({
      text: `INSERT INTO estudiante (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *;`,
      values: [nombre, rut, curso, nivel],
      name: 'createEstudiante'
    });
    console.log(chalk.bgBlue.green(`Estudiante ${result.rows[0].nombre} agregado con éxito`));
    release();
    pool.end();
  });
};

const readEstudiante = () => {
  pool.connect(async (error, client, release) => {
    if (error) return console.log({ name: error.name, message: error.message, code: error.code });
    const result = await client.query({
      text: `SELECT * FROM estudiante;`,
      name: 'readEstudiante',
      rowMode: 'array'
    });
    console.log(chalk.bgBlue.green('Registro actual'), result.rows);
    release();
    pool.end();
  });
};

const updateEstudiante = (nombre, rut, curso, nivel) => {
  pool.connect(async (error, client, release) => {
    if (error) return console.log({ name: error.name, message: error.message, code: error.code });
    const result = await client.query({
      text: `UPDATE estudiante 
      SET nombre = $1, rut = $2, curso = $3, nivel = $4 
      WHERE rut = $2 RETURNING *;`,
      values: [nombre, rut, curso, nivel],
      name: 'updateEstudiante',
    });
    console.log(chalk.bgBlue.green(`Estudiante ${result.rows[0].nombre} editado con éxito`));
    release();
    pool.end();
  });
};

const readEstudianteByRut = (rut) => {
  pool.connect(async (error, client, release) => {
    if (error) return console.log({ name: error.name, message: error.message, code: error.code });
    const result = await client.query({
      text: `SELECT * FROM estudiante WHERE rut = $1;`,
      values: [rut],
      name: 'readEstudiante'
    });
    console.log(result.rows);
    release();
    pool.end();
  });
};

const deleteEstudiante = (rut) => {
  pool.connect(async (error, client, release) => {
    if (error) return console.log({ name: error.name, message: error.message, code: error.code });
    const result = await client.query({
      text: `DELETE FROM estudiante WHERE rut = $1 RETURNING *;`,
      values: [rut],
      name: 'deleteEstudiante'
    });
    console.log(chalk.bgBlue.green(`Registro de estudiante con rut ${result.rows[0].rut} eliminado`));
    release();
    pool.end();
  });
};

const validarDatos = () => {
  if (!nombre) {
    console.log(chalk.bgYellow.black('No se ha ingresado un nombre...'));
    return false
  }
  else if (!rut) {
    console.log(chalk.bgYellow.black('No se ha ingresado un rut...'));
    return false
  }
  else if (!curso) {
    console.log(chalk.bgYellow.black('No se ha ingresado un curso...'));
    return false
  }
  else if (!nivel) {
    console.log(chalk.bgYellow.black('No se ha ingresado un nivel...'));
    return false
  }
  return true
}

try {
  if (query === 'nuevo') {
    if (validarDatos()) {
      createEstudiante(nombre, rut, curso, nivel);
    }
  }
  else if (query === 'consulta') {
    readEstudiante();
  }
  else if (query === 'editar') {
    if (validarDatos()) {
      updateEstudiante(nombre, rut, curso, nivel);
    }
  }
  else if (query === 'rut') {
    const [thisRut] = process.argv.slice(3);
    thisRut ? readEstudianteByRut(thisRut) : console.log(chalk.bgYellow.black('No se ha ingresado un rut...'));
  }
  else if (query === 'eliminar') {
    const [thisRut] = process.argv.slice(3);
    thisRut ? deleteEstudiante(thisRut) : console.log(chalk.bgYellow.black('No se ha ingresado un rut...'));
  }
  else {
    console.log(chalk.bgRed.white('No se ha especificado un comando válido.'));
  }
} catch (error) {
  console.log(error);
};