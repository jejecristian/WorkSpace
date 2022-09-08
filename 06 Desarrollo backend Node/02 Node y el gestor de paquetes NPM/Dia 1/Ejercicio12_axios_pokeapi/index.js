const axios = require('axios')

const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

// axios.get(url)
// .then(({data})=>{console.log(data)})
// .catch((error)=>{
//     console.log(error.response.status)
//     console.log(error.response.data)
// })

const ejecutar = async () =>{
    try {
        const { data } = await axios.get(url)
        console.log(data)
    } catch (error) {
        console.log({
            status: error.response.status,
            message: error.response.data
        });
    }
}

ejecutar()

