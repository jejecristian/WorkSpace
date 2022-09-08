const child_process = require('child_process');

// import child_process from 'child_process'; // Esto es muy nuevo, no trabajar con esto todavia

const ejecutar = (file) => {
    return new Promise((resolve, reject) => {
        child_process.exec(`node ${file}`, (err, result) => {
            if (err) {
                reject('Ha ocurrido un error...')
            }
            resolve(Number(result))
        })
    })
}

// ejecutar('EjercicioGuiado/num1.js')
// .then((numero)=>{console.log(numero)})
// .catch((error)=>{console.log(error)})

// ejecutar('EjercicioGuiado/num1.js')
// .then(console.log)
// .catch(console.log)

ejecutar('num1.js')
    .then((n1) => {
        ejecutar('num2.js')
            .then((n2) => {
                console.log(n1 + n2)
            })
            .catch(console.log)
    })
    .catch(console.log)