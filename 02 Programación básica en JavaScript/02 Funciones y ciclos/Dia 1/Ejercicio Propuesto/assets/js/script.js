// modulo 11 nos permite validar el RUN/RUT

/*
17899654-3 Rut de prueba

d8  d7  d6  d5  d4  d3  d2  d1  dv
1   7   8   9   9   6   5   4   3

4 * 2 = 8
5 * 3 = 15
6 * 4 = 24
9 * 5 = 45
9 * 6 = 54
8 * 7 = 56
7 * 2 = 14
1 * 3 = 3

resultado_suma_multiplicacion = 219
resto_resultado_suma_multiplicacion = 219 mod(%) 11 = 10
digito_verificador = 11 - 10 = 1

*/

//let run = prompt('ingrese su rut', '11111111-1')
// cuerpo del run 11111111
// separador -
// digito verificador 1
// split - replace - substr

/* Ensayos
console.log('12345678-9'.split('-'))
console.log('12345678-9'.replace('-','DV'))
console.log('12345678-9'.substr(1,1))
console.log('12345678-9'.substr(0,1))
console.log('12345678-9'.length)
console.log('12345678-9'.substr('12345678-9'.length-1,1))
*/

let run = prompt('ingrese su rut', '11111111-1')
let multiplo = 2
let numero = 0
let multiplicacion = 0
let suma = 0
let modulo = 0
let digito_verificador = ''
let dv = 0
let dv_auxiliar = ''

digito_verificador = run.substr((run.length-1),1)
console.log(digito_verificador)
cuerpo_run = run.substr(0,(run.length-2))
console.log(cuerpo_run)

/* Ensayo
for(let i = 0; i < cuerpo_run.length; i++){
    //console.log(i)
    console.log(run.substr(i, 1))
}
*/

for(let i = cuerpo_run.length-1; i >= 0 ; i--){
    //console.log(i)
    console.log(run.substr(i, 1))
    document.write(run.substr(i, 1),'<br>')

    numero = parseInt(cuerpo_run.substr(i, 1))
    multiplicacion = numero * multiplo
    suma += multiplicacion //suma = suma + multiplicacion

    console.log(`${numero}*${multiplo}=${suma}`)
    document.write(`${numero}*${multiplo}=${suma} <br>`)

    if(multiplo === 7){
        multiplo = 2
    }else{
        multiplo++
    }
}

console.log('suma = ', suma)
document.write('<br>','suma = ', suma, '<br>')

modulo = suma % 11
dv = 11 - modulo

if(dv === 11){
    dv_auxiliar = '0'
}else if(dv === 0 ){
    dv_auxiliar = 'k'
}else{
    dv_auxiliar = toString(dv)
}

if(digito_verificador.toUpperCase == dv_auxiliar){
    console.log('el rut es correcto')
    document.write('el rut es correcto')
}else{
    console.log('el rut es incorrecto')
    document.write('el rut es incorrecto')
}