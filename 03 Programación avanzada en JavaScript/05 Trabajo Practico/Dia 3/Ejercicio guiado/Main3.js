// RESCATA ETIQUETAS DEL DOM
const [opcionesAnimal, opcionesEdad, comentarios, preview, btnRegistrar] = document.querySelectorAll('#animal, #edad, #comentarios, #preview, #btnRegistrar')

// ESCUCHA EL COMPORTAMIENTO DEL BOTON
btnRegistrar.addEventListener('click', () => {
    datosClearDefault();

    if (validForm(opcionesAnimal.value, opcionesEdad.value, comentarios.value)) return

    alert('Tus datos fueron enviados con exito...')
    // resetForm()

})

// REFRESCA DATOS
const datosClearDefault = () => {
    //limpiar datos
}

// VALIDA DATOS
const validForm = (animal, edad, comentarios) => {

    if (!animal.trim()) {
        alert('No se ha indicado el animal')
        return true
    }

    if (!edad.trim()) {
        alert('No se ha indicado la edad')
        return true
    }

    if (!comentarios.trim()) {
        alert('No se ha indicado comentarios')
        return true
    }

    return false
}

const selectAnimal = document.querySelector('#animal')
const imgZoo = document.querySelector('#preview')

selectAnimal.addEventListener('change', async (e) => {
    try {
        const [{ imagen }] = await getZoo(e.target.value)
        imgZoo.style.backgroundImage = `url("assets/imgs/${imagen}")`
        imgZoo.style.transition = '.5s ease;'
    } catch (error) {
        console.log(error)
        imgZoo.style.backgroundImage = `url("assets/imgs/lion.svg")`
        imgZoo.style.transition = '.5s ease;'
    }

})

const getZoo = async (animalName) => {
    const response = await fetch('animales.json')
    const { zoo } = await response.json()
    // return zoo.filter(element => element.name == animalName)
    return zoo.filter(({ name }) => name == animalName)
}

// const resetForm = () => {
//     data.forEach(e => e.value = '')
//     imgZoo.style.backgroundImage = `url("assets/img/preview.webp")`
//     imgZoo.style.transition = '.5s ease;'
// }