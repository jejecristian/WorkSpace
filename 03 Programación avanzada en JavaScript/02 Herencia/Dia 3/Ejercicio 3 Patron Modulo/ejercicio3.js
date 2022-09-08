const moduloPrueba = (() => {
    let contador = 0;
    return {
        incrementaContador: () => contador++,
        mostrarAntesDelReset: () => contador,
        reseteoContador: () => contador = 0,
        mostrarValorFinal: () => contador
    };
})();

moduloPrueba.incrementaContador();
moduloPrueba.incrementaContador();
moduloPrueba.incrementaContador();
console.log(moduloPrueba.mostrarAntesDelReset())
moduloPrueba.reseteoContador();
console.log(moduloPrueba.mostrarValorFinal())
