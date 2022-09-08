const chai = require('chai');

describe('Sumar: Test de operaciones aritmeticas "Suma".', ()=>{
  it('1.- Valida la suma de dos numeros', ()=>{
    const num1 = 10;
    const num2 = 20;
    const suma = num1 + num2;
    chai.expect(suma).to.equal(30);
  });

  it('2.- Valida la suma de dos numeros', ()=>{
    const num1 = 20;
    const num2 = 20;
    const suma = num1 + num2;
    chai.expect(suma).to.equal(40);
  });
});