const { Client } = require('pg');
const chalk = require('chalk');

const [query, nombre, rut, curso, nivel] = process.argv.slice(2)

const client = new Client({
  connectionString: 'postgres://postgres:postgres@localhost:5432/escuela'
});

const createEstudiante = async (nombre, rut, curso, nivel) => {
  client.connect();
  const result = await client.query(`INSERT INTO estudiante 
    VALUES ('${nombre}', '${rut}', '${curso}', '${nivel}') RETURNING *;`);
  console.log(chalk.bgBlue.green(`Estudiante ${result.rows[0].nombre} agregado con éxito`));
  client.end();
};

const readEstudiante = async () => {
  client.connect();
  const result = await client.query(`SELECT * FROM estudiante;`);
  console.log(chalk.bgBlue.green('Registro actual'), result.rows);
  client.end();
};

const updateEstudiante = async (nombre, rut, curso, nivel) => {
  client.connect();
  const result = await client.query(`UPDATE estudiante 
    SET nombre = '${nombre}', rut = '${rut}', curso = '${curso}', nivel = '${nivel}' 
    WHERE rut = '${rut}' RETURNING *;`);
  console.log(chalk.bgBlue.green(`Estudiante ${result.rows[0].nombre} editado con éxito`));
  client.end();
};

const readEstudianteByRut = async (rut) => {
  client.connect();
  const result = await client.query(`SELECT * FROM estudiante WHERE rut = '${rut}';`);
  console.log(result.rows);
  client.end();
};

const deleteEstudiante = async (rut) => {
  client.connect();
  const result = await client.query(`DELETE FROM estudiante WHERE rut = '${rut}' RETURNING *;`);
  console.log(chalk.bgBlue.green(`Registro de estudiante con rut ${result.rows[0].rut} eliminado`));
  client.end();
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
    const [ thisRut ] = process.argv.slice(3);
    thisRut ? readEstudianteByRut(thisRut) : console.log(chalk.bgYellow.black('No se ha ingresado un rut...'));
  }
  else if (query === 'eliminar') {
    const [ thisRut ] = process.argv.slice(3);
    thisRut ? deleteEstudiante(thisRut) : console.log(chalk.bgYellow.black('No se ha ingresado un rut...'));
  }
  else {
    console.log(chalk.bgRed.white('No se ha especificado un comando válido.'));
  }
} catch (error) {
  console.log(error);
};