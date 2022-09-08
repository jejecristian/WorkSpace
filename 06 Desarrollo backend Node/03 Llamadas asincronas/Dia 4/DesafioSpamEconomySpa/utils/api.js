const axios = require('axios');

const getData = async (url) => {
  const { data } = await axios.get('https://mindicador.cl/api');
  return data;
}

module.exports = { getData };