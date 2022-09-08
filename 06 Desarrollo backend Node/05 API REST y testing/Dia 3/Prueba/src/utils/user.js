const getData = require('./api.js');

const { v4: uuidv4 } = require('uuid');

const getUser = async () => {
  const { data } = await getData();
  return {
    id: uuidv4().slice(30),
    nombre: `${data.results[0].name.first} ${data.results[0].name.last}`,
    email: data.results[0].email,
    debe: 0,
    recibe: 0
  }
};

module.exports = getUser;