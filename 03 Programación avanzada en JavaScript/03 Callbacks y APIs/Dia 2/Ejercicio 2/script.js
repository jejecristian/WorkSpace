//PROMESAS EN JS
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false;
    if (expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');
});
//miPromesa.then( valor => console.log(valor), error => console.log(error));
miPromesa.then(resolver => console.log(resolver)).catch(rechazar => console.log(rechazar));