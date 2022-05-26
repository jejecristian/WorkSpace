// declaracion de un arreglo, vector o array
let miArreglo = [1,2,3,4,5,6,7,8,9];
let miArregloDos = new Array(1,2,3,4,5,6,7,8,9);
let miArregloTres = Array(1,2,3,4,5,6,7,8,9);
console.log('arreglo con [] -> ', miArreglo);
console.log('arreglo con new Array -> ', miArregloDos);
console.log('arreglo con Array -> ', miArregloTres);

let miArregloMixto = ['string',1,1.5,true,{},['otro','arreglo']];
console.log('arreglo mixto -> ', miArregloMixto);

let matriz = [
[1,2,3,4,5],
[6,7,8,9,10],
[11,12,13,14,15]
];

console.log('matriz 3X5 ->',matriz);
console.log('matriz 3X5');
console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]);

let matrizDos = [
    [1,2,3,4,5,6,7,8],
    [6,7,8,9,10],
    []
    ];

console.log('matriz');
console.log(matrizDos[0]);
console.log(matrizDos[1]);
console.log(matrizDos[2]);

let arregloVacio = [];
let arregloString = ['arreglo','de','string'];
let arregloBoolean = [true,false];
let arregloNumeroentero = [1,2,3,4,5];
let arregloNumerosDecimales = [1.0,1.1,1.2,1.3];

let objeto = {
    numero: 1
};

console.log('objeto -> ', objeto)
let arregloObjetos = [{numero:5},{nombre:'rodrigo'},{}];
console.log('arregloObjetos -> ',arregloObjetos);
console.log('largo arregloObjetos -> ', arregloObjetos.length);
console.log('ultimo valor ->', arregloObjetos[arregloObjetos.length-1]);

let vectorCiclo = [1,2,3,4,5];
let posicion = 0;
while(posicion < vectorCiclo.length){
    console.log(`[while] el vectorCiclo en la posicion ${posicion} tiene el valor ${vectorCiclo[posicion]}`);
    document.write(`[while] el vectorCiclo en la posicion ${posicion} tiene el valor ${vectorCiclo[posicion]}`);
    posicion ++;
}

posicion = 0;
do{
    console.log(`[do...while] el vectorCiclo en la posicion ${posicion} tiene el valor ${vectorCiclo[posicion]}`);
    document.write(`<h3>[do...while] el vectorCiclo en la posicion ${posicion} tiene el valor ${vectorCiclo[posicion]}</h3>`);
    posicion ++;
}while(posicion < vectorCiclo.length)

for(i = 0; i <vectorCiclo.length; i++){
    console.log(`[for] el vectorCiclo en la posicion ${i} tiene el valor ${vectorCiclo[i]}`);
    document.write(`<p>[for] el vectorCiclo en la posicion ${i} tiene el valor ${vectorCiclo[i]}</p>`);
}

let vectorBrujo = [10,50,5,0,20,11,60,3,2];
let auxiliar = 0;
document.writeln(`<p>${vectorBrujo}</p>`);
for(let j = 1; j < vectorBrujo.length; j++){
    for(let i = 0; i < vectorBrujo.length; i++){
        if(vectorBrujo[i] > vectorBrujo[i+1]){
            auxiliar = vectorBrujo[i];
            vectorBrujo[i] = vectorBrujo[i+1];
            vectorBrujo[i+1] = auxiliar;
        }
    }
}

document.writeln(`<p>${vectorBrujo}</p>`);