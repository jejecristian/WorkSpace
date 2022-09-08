const https = require('https')

const url = 'https://api.gael.cloud/general/public/clima'

const req = https.get(url, (resp) => {
    console.log(`StatusCode: ${resp.statusCode}`)
    let data = ''
    resp.on('data', (chunk) => data += chunk)
    resp.on('end', () => {
        // console.log(JSON.parse(data))
        const clima = JSON.parse(data)
        const santiago = clima.filter(({ Codigo }) => Codigo == 'SCQN')
        console.log(santiago)

        const despejado = clima.filter(({Estado})=> Estado == 'Despejado')
        console.log(despejado)
    })
})

req.on('error', console.log)
req.end()