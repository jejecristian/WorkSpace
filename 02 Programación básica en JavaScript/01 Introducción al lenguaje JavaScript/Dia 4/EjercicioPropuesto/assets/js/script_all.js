//------------------------------------------------------------------
if(numero !=18){
    console.log('el numero no es 18 pero es mayor a 10')
}
else if (numero < 10){
    console-log('el numero es menor a diez y por lo tanto no es 18')
}
else{
    console.log('no se cumplieron las condiciones anteriores')
    if(numero === 18){
        console.log('el numero es 18')
    }
    else if (numero == 18){
        console.log('numero contiene 18 pero no es numerico')
    }else{
        console.log('el numero no es 18')
    }
}
//------------------------------------------------------------------
switch(numero){
    case 10:
        console.log('es un 10')
        break
    case 15:
        console.log('es un 15')
        console.log(':)')
        break
    default:
        console.log('no es un 10 ni un 15')
        break
}
//------------------------------------------------------------------
for(var i = 0; i === 10; i++){
    console.log('el valor de i es ' + i)
}
undefined
//------------------------------------------------------------------
for(var i = 0; i < 10; i++){
    console.log('el valor de i es ' + i)
}
// el valor de i es 0
// VM3281:2 el valor de i es 1
// VM3281:2 el valor de i es 2
// VM3281:2 el valor de i es 3
// VM3281:2 el valor de i es 4
// VM3281:2 el valor de i es 5
// VM3281:2 el valor de i es 6
// VM3281:2 el valor de i es 7
// VM3281:2 el valor de i es 8
// VM3281:2 el valor de i es 9
//------------------------------------------------------------------
for(var i = 0; i <= 10; i++){
    console.log('el valor de i es ' + i)
}
// el valor de i es 0
// VM3325:2 el valor de i es 1
// VM3325:2 el valor de i es 2
// VM3325:2 el valor de i es 3
// VM3325:2 el valor de i es 4
// VM3325:2 el valor de i es 5
// VM3325:2 el valor de i es 6
// VM3325:2 el valor de i es 7
// VM3325:2 el valor de i es 8
// VM3325:2 el valor de i es 9
// VM3325:2 el valor de i es 10
//------------------------------------------------------------------
var i = 10
console.log('el valorde i antes de entrar al for es: '+i)
for(var i = 0; i < 5; i++){
	console.log('el valor de i dentro del for es: '+i)
}
console.log('el valor de i fuera del for al terminar es ' + i)
//------------------------------------------------------------------
for(var i = 10; i > 2; i--){
    console.log('el valor de i dentro del for es: '+i)
}
//------------------------------------------------------------------
var numero = 10
while(numero > 1){
    console.log('el valor de numero es '+numero)
    numero--
}
console.log('termino el while, el valor de numero es '+numero)
// VM40:3 el valor de numero es 10
// VM40:3 el valor de numero es 9
// VM40:3 el valor de numero es 8
// VM40:3 el valor de numero es 7
// VM40:3 el valor de numero es 6
// VM40:3 el valor de numero es 5
// VM40:3 el valor de numero es 4
// VM40:3 el valor de numero es 3
// VM40:3 el valor de numero es 2
// VM40:6 termino el while, el valor de numero es 1
//------------------------------------------------------------------
var respuesta = prompt('desea continuar si/no', 'no')
while(respuesta == 'si'){
    if(respuesta == 'si'){
        alert('usted dijo si')
    }else{
        alert('usted no dijo si')
    }
}
//------------------------------------------------------------------
do{
    respuesta = prompt('desea continuar si/no', 'no')
    console.log(respuesta)
}while(respuesta != 'no')
//------------------------------------------------------------------
function miPrimeraFuncion(){
    alert('hola!!!, es mi primera funcion')
}
miPrimeraFuncion()
//------------------------------------------------------------------
function funcionSaludo(nombre){
    alert(`hola ${nombre}, es mi primera funcion con parametros`)
}
funcionSaludo("Rodrigo")
funcionSaludo(prompt('ingrese su nombre'))
//------------------------------------------------------------------
function sumatoria(numero1, numero2, numero3, numero4){
    console.log('la suma es '+ (numero1+numero2+numero3+numero4))
}
sumatoria(5,9,6,2)
//------------------------------------------------------------------
function sumatoriaRetorna(numero1, numero2, numero3, numero4){
    return(numero1+numero2+numero3+numero4)
}
//------------------------------------------------------------------
resultado = sumatoria(5,9,6,2)
console.log(resultado)
resultado = sumatoriaRetorna
console.log(resultado)
console.log(resultado * 5)
resultado = sumatoriaRetorna(5,9,'2',6) //resultado es 1426 ya que suma 5+9 = 14 conact 2 concat 6 = 1426
//------------------------------------------------------------------
function promedioNotas(nota1, nota2, nota3){
    promedio = ((nota1 + nota2 + nota3) / 3)
    mensaje = 'el promedio es: '+ promedio
    return mensaje
}
alert(`${
    n1 = prompt('ingrese nota 1: ', 4.0),
    n1 = parseFloat(n1),
    n2 = prompt('ingrese nota 2: ', 4.0),
    n2 = parseFloat(n2),
    n3 = prompt('ingrese nota 3: ',4.0),
    n3 = parseFloat(n3),
    retorno = promedioNotas(n1, n2, n3),
    console.log(retorno)
}`)
