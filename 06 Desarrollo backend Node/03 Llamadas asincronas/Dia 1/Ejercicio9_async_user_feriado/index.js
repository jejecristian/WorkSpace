const axios = require('axios');
const moment = require('moment');

const urlUser = 'https://randomuser.me/api/';
const urlHolidays = 'https://api.victorsanmartin.com/feriados/en.json';

const getData = async (url) => await axios.get(url);

const getUser = async () => {
  const { data } = await getData(urlUser);
  const {title, first, last} = data.results[0].name;
  return {
    name: `${title} ${first} ${last}`,
    birthday: moment(data.results[0].dob.date).format('MMM Do')
  }
  // // TEST CASO EXITOSO
  // return {
  //   name: `${title} ${first} ${last}`,
  //   birthday: moment('1948-01-01T04:43:23.735Z').format('MMM Do')
  // }
};

const getHolidays = async () => {
  const { data } = await getData(urlHolidays);
  return data.data;
}

const getValidate = async () => {
  try {
    const [user, holidays] = await Promise.all([getUser(), getHolidays()]);
    const objHoliday = holidays.find(({ date })=> moment(date).format('MMM Do') === user.birthday);
    objHoliday 
      ? console.log(`${user.name} nacio el feriado de ${objHoliday.title}`)
      : console.log('Usted no está de cumpleaños un feriado...')
  } catch (error) {
    console.log(error);
  }
}

getValidate();

