// Filtrar elementos de un array

// CODIGO A
let alumnos = [
    { nombre: 'Juan', edad: 24 },
    { nombre: 'Pedro', edad: 19 },
    { nombre: 'Maria', edad: 22 },
    { nombre: 'Jose', edad: 28 },
    { nombre: 'Diego', edad: 18 },
]
let mayorA20 = alumnos.filter(alumno => {
    return alumno.edad > 20
})
console.log(mayorA20)

// CODIGO B
let alumnosB = [
    { nombre: 'Juan', edad: 24 },
    { nombre: 'Pedro', edad: 19 },
    { nombre: 'Maria', edad: 22 },
    { nombre: 'Jose', edad: 28 },
    { nombre: 'Diego', edad: 18 },
]
let mayorA20B = alumnosB.filter(alumno => alumno.edad > 20)
console.log(mayorA20B)

// CODIGO C
let alumnosC = [
    { nombre: 'Juan', edad: 24 },
    { nombre: 'Pedro', edad: 19 },
    { nombre: 'Maria', edad: 22 },
    { nombre: 'Jose', edad: 28 },
    { nombre: 'Diego', edad: 18 },
]
let mayorA20C = alumnosC.filter(({ edad }) => edad > 20)
console.log(mayorA20C)
