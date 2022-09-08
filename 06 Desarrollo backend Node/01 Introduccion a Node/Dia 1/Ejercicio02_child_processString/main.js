const child_process = require('child_process')

const fullName = (file) => String(child_process.execSync(`node ${file}`)).trim()

try{
    const nombre = fullName('firstName.js')
    const apellido = fullName('lastName.js')
    console.log(`${nombre} ${apellido}`)
}catch(error){
    console.log(error)
}
