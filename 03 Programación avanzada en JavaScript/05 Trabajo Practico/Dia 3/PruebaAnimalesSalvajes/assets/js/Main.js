import MyApiAnimales from "./MyApiAnimales.js"
import Useful from "./Useful.js"
import Validator from "./Validator.js"
import CreateObj from "./CreateObj.js"

let imgAnimalTemplate, mp3AnimalTemplate;
let listaAnimales = [];

Useful.addRow();

// ESCUCHA EL COMPORTAMIENTO DEL SELECTOR DE ANIMALES
Useful.animal().addEventListener('change', async () => {
    try {
        const { animales } = await MyApiAnimales.getData();
        imgAnimalTemplate = animales.find((p) => p.name == Useful.animal().value).imagen;
        mp3AnimalTemplate = animales.find((p) => p.name == Useful.animal().value).sonido;
        Useful.preview().style.backgroundImage = `url("assets/imgs/${imgAnimalTemplate}")`
        Useful.preview().style.transition = '.5s ease;'
    } catch (error) {
        console.log(error)
        Useful.clean()
    }
})

// ESCUCHA EL COMPORTAMIENTO DEL BOTON AGREGAR
Useful.btnRegistrar().addEventListener('click', () => {
    if (Validator.verify(Useful.animal().value, Useful.edad().value, Useful.comentarios().value)) return
    let animalCreado = CreateObj.make(Useful.animal().value, Useful.edad().value, imgAnimalTemplate, Useful.comentarios().value, mp3AnimalTemplate)
    listaAnimales.push(animalCreado)
    Useful.insertAnimales(listaAnimales)
    Useful.clean();
})

// MUESTRA ANIMAL EN MODAL
window.mostrarEnModal = (i) => {
    const animal = listaAnimales[i]
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = ''
    modalBody.classList.add("text-center", "text-white")
    modalBody.innerHTML = `
        <img class="img-fluid" src="assets/imgs/${animal.img}" alt="${animal.img}">
        <p class=" mt-2 mb-0">${animal.edad}</p>
        <p class="">Comentarios</p>
        <hr class="bg-dark w-75 mx-auto">
        <p class="">${animal.comentarios}</p>
    `
}

// EMITE SONIDO DEL ANIMAL
window.emitirSonido = (i) => {
    const animal = listaAnimales[i]
    const audioTag = document.getElementById('player')
    if (animal.nombre == 'Leon') {
        audioTag.src = `assets/sounds/${animal.Rugir()}`
    } else if (animal.nombre == 'Lobo') {
        audioTag.src = `assets/sounds/${animal.Aullar()}`
    } else if (animal.nombre == 'Oso') {
        audioTag.src = `assets/sounds/${animal.Grunir()}`
    } else if (animal.nombre == 'Serpiente') {
        audioTag.src = `assets/sounds/${animal.Sisear()}`
    } else if (animal.nombre == 'Aguila') {
        audioTag.src = `assets/sounds/${animal.Chillar()}`
    }
    document.getElementById('player').play()
}