import { getCountries, getCountrie } from './utils/countries.js.js'
import { chartCountries } from './utils/charts.js.js'
import { tableCountries } from './utils/table.js'

const url = 'http://localhost:3000'

const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
  })

window.verDetalle = async (location) => {
    document.querySelector('#modalCountrieLabel').innerHTML = location
    const {data} = await getCountrie(url, location)
    chartCountries(data)
    modalCountrie.show()
}

(async () => {
    const {data} = await getCountries(url)
    chartCountries(data)
    tableCountries(data)

})()

