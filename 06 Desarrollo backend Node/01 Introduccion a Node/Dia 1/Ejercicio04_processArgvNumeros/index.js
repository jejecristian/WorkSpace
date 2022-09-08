const valores = process.argv
// console.log(+valores[2] + +valores[3]) Una forma de hacer un casteo a numero para suma
console.log(valores[2] * valores[3])


const [,, num1, num2] = process.argv
console.log(num1 * num2)


const [v1, v2] = process.argv.slice(2)
console.log(v1 * v2)


const [,, numero1, numero2] = process.argv

if (!numero1 || !numero2){
    return console.log('debe ingresar ambos valores')
}

console.log(numero1 * numero2)