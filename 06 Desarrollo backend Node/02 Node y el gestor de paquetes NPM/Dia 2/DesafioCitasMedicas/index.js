/*
1. El registro de los usuarios debe hacerse con la API Random User usando axios para consultar la data.
2. Cada usuario registrado debe tener un campo id único generado por el paquete UUID.
3. Cada usuario debe tener un campo timestamp almacenando la fecha de registro obtenida por medio del paquete Moment.
4. Por cada consulta realizada al servidor, se debe devolver al cliente una lista con los
datos de todos los usuarios registrados usando Lodash para recorrer el arreglo de usuarios.
5. En cada consulta también se debe imprimir por la consola del servidor la misma lista de usuarios pero
con fondo blanco y color de texto azul usando el paquete Chalk.
6. El servidor debe ser levantado con el comando Nodemon.
*/

const http = require('http')
const axios = require('axios')
const moment = require('moment')
const _ = require('lodash')
const { v4: uuidv4 } = require('uuid')
const chalk = require('chalk')

const url = 'https://randomuser.me/api/'
const port = 3000
const localhost = `http://localhost:${port}`
const allUsers = []

// CONSUME API RANDOM USER
const consumeApi = async () => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        const objErr = { status: error.response.status, message: error.response.data }
        console.log(chalk.bgRed.white(`Se ha producido un error \nStatus: ${objErr.status} \nMessage: ${objErr.message}`))
        return objErr
    }
}

// CREA SERVIDOR LOCAL
const server = http.createServer(async (request, response) => {
    if (request.url.startsWith('/addUser')) {
        const data = await consumeApi()
        if (data.results) {
            const newUser = {
                nombre: data.results[0].name.first,
                apellido: data.results[0].name.last,
                timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
                id: uuidv4().slice(30),
                img: data.results[0].picture.medium,
                profile: data.results[0].picture.large
            }
            const { nombre, apellido, timestamp, id } = newUser
            console.log(chalk.bgGreen(`\nNombre: ${nombre} - Apellido: ${apellido} - ID: ${id} - Timestamp: ${timestamp}`))
            allUsers.push(newUser)
            response.write(templateAddUser(newUser))
        } else {
            response.write(templateErr(data.status, data.message))
        }
    } else if (request.url.startsWith('/allUsers')) {
        if (allUsers.length > 0) {
            let lista = ''
            _.forEach(allUsers, (objUsr) => {
                const { nombre, apellido, timestamp, id, img } = objUsr
                lista += `
                <tr>
                    <td><img src="${img}" alt="img"></td>
                    <td>
                        <li>Nombre: ${nombre} - Apellido: ${apellido} - ID: ${id} - Timestamp: ${timestamp}</li>
                    </td>
                </tr>`
                console.log(chalk.bgWhite.blue(`Nombre: ${nombre} - Apellido: ${apellido} - ID: ${id} - Timestamp: ${timestamp}`))
            })
            response.write(templateAllUsers(lista))
        } else {
            console.log(chalk.bgWhite.blue('\nNo existen usuarios agregados a la lista medica todavia.'))
            response.write('<h1>No existen usuarios agregados a la lista medica todavia.</h1><br><button onclick="history.back()">Volver</button>')
        }
    } else {
        response.write(templateHomePage())
        response.end()
    }
    response.end()
})
server.listen(port, () => console.log(`Servidor operativo en: ${localhost}`))


// TEMPLATE PARA RESPUESTAS
const templateHomePage = () => {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Citas Medicas</title>
    </head>
    <body class="bg-success bg-opacity-50">
        <header class="text-center">
            <h1>Citas Medicas:</h1>
        </header>
        <div class="col-lg-3 mx-auto">
            <ul class="list-group text-center">
                <li class="list-group-item bg-ligth">
                    <a href="${localhost}/addUser">Agregar usuario</a>
                </li>
                <li class="list-group-item bg-warning">
                    <a href="${localhost}/allUsers">Mostrar todos los usuarios</a>
                </li>
            </ul>
        </div>
    </body>
    </html>
    `
}

const templateAddUser = (newUser) => {
    const { nombre, apellido, timestamp, id, profile } = newUser
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Lista de Usuarios</title>
    </head>
    <body class="bg-success bg-opacity-50">
        <div class="container py-5">
            <div class="card" style="width: 18rem;">
                <img src="${profile}" class="card-img-top" alt="img">
                <div class="card-body">
                    <h5 class="card-title">${nombre} ${apellido}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">${timestamp}</li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-primary" onclick="window.location.reload()">Agregar otro usuario</button>
                </div>
            </div>
            <button type="button" class="btn btn-secondary my-5" onclick="history.back()">Volver</button>
        </div>
    </body>
    </html>
    `
}

const templateAllUsers = (lista) => {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Lista de Usuarios</title>
    </head>
    <body class="bg-success bg-opacity-50">
        <div class="container py-5">
            <ol>
                <table class="table-responsive table-dark table-striped">
                    <thead>
                        <tr>
                            <th class="col-2" scope="col"></th>
                            <th class="col-10" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${lista}
                    </tbody>
                </table>
            </ol>
            <button type="button" class="btn btn-secondary my-5" onclick="history.back()">Volver</button>
        </div>
    </body>
    </html>
    `
}

const templateErr = (status, message) => {
    return `
    <h1>status: ${status}, message: ${message}</h1>
    <br>
    <button onclick="history.back()">Volver</button>`
}
