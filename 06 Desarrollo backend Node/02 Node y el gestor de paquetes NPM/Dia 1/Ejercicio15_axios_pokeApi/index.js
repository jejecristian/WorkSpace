/*
1.- Consultar pokeapi
2.- Devolver un pokemon
3.- Imprimir pokemon en consola como un objeto:
- uuid
- fecha de la consulta
- nombre pokemon
4.- formato de fecha "MMM Do YY"
*/

const axios = require('axios')
const chalk = require('chalk')
const moment = require('moment')
const { v4: uuidv4 } = require('uuid')

const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

const ditto = async () => {
    try {
        const { data } = await axios.get(url)
        const objDitto = { id: uuidv4(), fecha: moment().format("MMM Do YY"), nombre: data.name }
        console.log(objDitto)
    } catch (error) {
        console.log(chalk.bgRed.white(`${error.response.status}, ${error.response.data}`))
    }
}

ditto()

