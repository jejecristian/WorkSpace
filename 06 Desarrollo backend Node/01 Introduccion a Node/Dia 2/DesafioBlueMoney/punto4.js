/*
1. Recibir por la línea de comando los siguientes argumentos:
    a. Nombre del archivo que se creará.
    b. Extensión del archivo.
    c. Indicador económico que se desea convertir.
    d. Cantidad de pesos que se quiere cambiar.
2. Consultar la API con el módulo https y almacenar la respuesta en una variable.
3. Crear un archivo con el módulo fs cuyos datos están formados por los argumentos
recibidos por línea de comando y su contenido basado en el template de la
descripción.
4. Enviar por consola el contenido del archivo luego de que haya sido creado.
*/
const https = require('https')
const fs = require('fs')
const [nombre, extension, indicador, pesos] = process.argv.slice(2)
const url = 'https://mindicador.cl/api'

const validarArgv = () => {
    let retorno = ''
    if (nombre == 'undefined') {
        retorno += '\nNo se entregó nombre del archivo en argumento'
    }
    if (extension == 'undefined') {
        retorno += '\nNo se entregó extension del archivo en argumento'
    }
    if (indicador == 'undefined') {
        retorno += '\nNo se entregó indicador en argumento'
    }
    if (pesos == 'undefined' || parseInt(pesos) <= 0) {
        retorno += '\nNo se entregó una cifra de pesos válido en argumento'
    }
    return retorno
}

const calculoMatematico = (mindicador) => {
    if(mindicador[indicador] == undefined){
        return `El indicador ingresado "${indicador}" no es válido`
    }
    const unidadMedida = mindicador[indicador].unidad_medida
    const valorIndicador = mindicador[indicador].valor
    if (unidadMedida == 'Pesos') {
        return pesos / valorIndicador
    }
    if (unidadMedida == 'Dólar') {
        const valorDolar = mindicador['dolar'].valor
        const pesosADolar = pesos / valorDolar
        return pesosADolar / valorIndicador
    }
    return `No se puede realizar el calculo debido a que el indicador tiene como unidad de medida: ${unidadMedida}`
}

const crearTempleate = (conversion) =>
    `A la fecha: ${new Date()}
Fue realizada cotización con los siguientes datos:
Cantidad de pesos a convertir: ${pesos} pesos
Convertido a "${indicador}" da un total de:
$${conversion}`

const crearArchivo = (template) => {
    fs.writeFile(`${nombre}.${extension}`, template, 'utf8', (err) => err ? console.log('Ha ocurrido un error') : console.log(''))
}

const leerArchivo = () => {
    fs.readFile(`${nombre}.${extension}`, 'utf8', (err, file) => err ? console.log('Ha ocurrido un error') : console.log(file))
}

const request = https.get(url, (response) => {
    let data = ''
    response.on('data', (particion) => data += particion)
    response.on('end', () => {
        data = JSON.parse(data)
        if (validarArgv() == '') {
            const conversion = calculoMatematico(data)
            conversion > 0 ? crearArchivo(crearTempleate(conversion)) : crearArchivo(conversion)
            leerArchivo()
        } else {
            console.log(validarArgv())
        }
    })
})

request.on('error', console.log)
request.end()