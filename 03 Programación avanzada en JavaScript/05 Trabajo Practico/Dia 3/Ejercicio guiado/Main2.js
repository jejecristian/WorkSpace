console.log('---Nombre del animal---')
console.log('Etiqueta Select:')
const tagSelectAnimal = document.getElementById('animal')
console.log(tagSelectAnimal)

const nodeListOptNombre = tagSelectAnimal.querySelectorAll('option')
console.log('\nOpciones del select:')
nodeListOptNombre.forEach(opcion => {
    console.log(opcion.value)
})

console.log('\nOpcion seleccionada:')
nodeListOptNombre.forEach(opcion => {
    if(opcion.selected) console.log(opcion.value)
})

//---------------------------------------------------------------------------
console.log('\n\n---Años de edad estimados---')
console.log('Etiqueta Select:')
const tagSelectEdad = document.getElementById('edad')
console.log(tagSelectEdad)

const nodeListOptEdad = tagSelectEdad.querySelectorAll('option')
console.log('\nOpciones del select:')
nodeListOptEdad.forEach(opcion => {
    console.log(opcion.value)
})

console.log('\nOpcion seleccionada:')
nodeListOptEdad.forEach(opcion => {
    if(opcion.selected) console.log(opcion.value)
})

//---------------------------------------------------------------------------
console.log('\n\n---Comentarios---')
const comentarios = document.getElementById('comentarios').value
console.log(`comentarios: ${comentarios}`)

//---------------------------------------------------------------------------
console.log('\n\n---Imagen Preview---')
const preview = document.getElementById('preview')
console.log(preview)

//---------------------------------------------------------------------------
console.log('\n\n---Boton Agregar---')
const btnRegistrar = document.getElementById('btnRegistrar')
console.log(btnRegistrar)
btnRegistrar.addEventListener('click', () => {
    console.log('Se hizo click en el boton')
})
