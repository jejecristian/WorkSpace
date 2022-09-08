const axios = require('axios');

const getData = async ()=> await axios.get('https://randomuser.me/api/');

module.exports = getData;