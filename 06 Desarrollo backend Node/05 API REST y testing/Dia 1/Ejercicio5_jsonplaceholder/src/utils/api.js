const axios = require('axios');

const getData = async (url) => await axios.get(url);

const getUser = async () => {
  const { data } = await getData('https://jsonplaceholder.typicode.com/users');
  return data.map(({name, username, email}) => ({nombre: name, username, email}));
};

module.exports = getUser;