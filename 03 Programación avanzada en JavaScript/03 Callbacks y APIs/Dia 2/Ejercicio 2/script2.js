//FUNCION SETTIMEOUT Y PROMESAS
let promesa = new Promise((resolver) => {
    setTimeout(() => resolver('saludos con promesa y timeout'), 3000);
});

//async indica que una función regresa una promesa
async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}

//async/await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}

//funcionConPromesaYAwait();
//promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout() {
    console.log('inicio función');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('fin función');
}
funcionConPromesaAwaitTimeout();