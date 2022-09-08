const axios = require('axios')
const chalk = require('chalk')

const url = 'https://mindicador.cl/api'

const apiDolar = (async () => {
    try {
        const { data } = await axios.get(url)
        console.log(chalk.bgWhite.red(`Valor dolar: ${data.dolar.valor}`));
    } catch (error) {
        console.log(
            {
                status: error.response.status,
                message: error.response.data.message
            }
        );
    }
})()

