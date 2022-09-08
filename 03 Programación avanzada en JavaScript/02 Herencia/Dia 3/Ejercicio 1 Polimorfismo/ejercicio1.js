//Polimorfismo
class Game {
    constructor(weight) {
        this.weight = weight;
    }
    stop() {
        return `El juego se encuentra detenido momentáneamente`;
    }
}

class Tank extends Game {
    constructor(weight, bullet) {
        super(weight);
        this.bullet = bullet;
    }
    stop(mensaje) {
        console.log(mensaje)
        // return `El Tanque se encuentra detenido...`;
    }
}
class Plane extends Game {
    constructor(weight, bullet) {
        super(weight);
        this.bullet = bullet;
    }
    stop() {
        return `El Avión apagó los motores`;
    }
}

let juego1 = new Game(20, 300);
let tanque1 = new Tank(100, 20);
let avion1 = new Plane(54, 2000);

console.log(juego1.stop());
tanque1.stop('El Tanque no está en marcha...');
console.log(avion1.stop());
