const [form, ...data] = document.querySelectorAll('form, form > .info > select, form > .info > textarea')
const spansError = document.querySelectorAll('.info > span')

console.log(spansError)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    formClearDefault();

    const [{ value: animal }, { value: edad }, { value: comentarios }] = data;

    if (validForm(animal, edad, comentarios)) return

    alert('Tus datos fueron enviados con exito...')
    resetForm()

})

const formClearDefault = () => spansError.forEach((e) => e.classList.remove('error'))

const validForm = (animal, edad, comentarios) => {
    const [animalError, edadError, comentariosError] = spansError

    if (!animal.trim()) {
        animalError.classList.add('error')
        return true
    }

    if (!edad.trim()) {
        edadError.classList.add('error')
        return true
    }

    if (!comentarios.trim()) {
        comentariosError.classList.add('error')
        return true
    }

    return false
}

const resetForm = () => {
    data.forEach(e => e.value = '')
    imgZoo.style.backgroundImage = `url("assets/img/preview.webp")`
    imgZoo.style.transition = '.5s ease;'
}

const selectAnimal = document.querySelector('#animales')
const imgZoo = document.querySelector('.img-zoo')

selectAnimal.addEventListener('change', async (e) => {
    try {
        const [{ imagen }] = await getZoo(e.target.value)
        imgZoo.style.backgroundImage = `url("assets/img/${imagen}")`
        imgZoo.style.transition = '.5s ease;'
    } catch (error) {
        console.log(error)
        imgZoo.style.backgroundImage = `url("assets/img/preview.webp")`
        imgZoo.style.transition = '.5s ease;'
    }

})

const getZoo = async (animalName) => {
    const response = await fetch('assets/json/zoo.json')
    const { zoo } = await response.json()
    // return zoo.filter(element => element.name == animalName)
    return zoo.filter(({ name }) => name == animalName)
}