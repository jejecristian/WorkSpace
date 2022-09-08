import Leon from "./Class/Leon.js"
import Lobo from "./Class/Lobo.js"
import Oso from "./Class/Oso.js"
import Serpiente from "./Class/Serpiente.js"
import Aguila from "./Class/Aguila.js"

let createObj = (() => {
    const make = (animal, edad, img, comentarios, sonido) => {
        let objAnimal;
        if (animal == 'Leon') {
            objAnimal = new Leon(animal, edad, img, comentarios, sonido)
        } else if (animal == 'Lobo') {
            objAnimal = new Lobo(animal, edad, img, comentarios, sonido)
        } else if (animal == 'Oso') {
            objAnimal = new Oso(animal, edad, img, comentarios, sonido)
        } else if (animal == 'Serpiente') {
            objAnimal = new Serpiente(animal, edad, img, comentarios, sonido)
        } else {
            objAnimal = new Aguila(animal, edad, img, comentarios, sonido)
        }
        return objAnimal
    }
    return { make }
})()

export default createObj;