// Transforma un array en otro

// CODIGO A
let alumnos = [
    { nombre: 'Juan', edad: 24 },
    { nombre: 'Pedro', edad: 19 },
    { nombre: 'Maria', edad: 22 },
    { nombre: 'Jose', edad: 28 },
    { nombre: 'Diego', edad: 18 },
]
let alumnosNuevo = alumnos.map(alumno => {
    alumno.esMayor = alumno.edad > 18
    return alumno
})
console.log(alumnosNuevo)

// CODIGO B
let alumnosB = [
    { nombre: 'Juan', edad: 24 },
    { nombre: 'Pedro', edad: 19 },
    { nombre: 'Maria', edad: 22 },
    { nombre: 'Jose', edad: 28 },
    { nombre: 'Diego', edad: 18 },
]
let alumnosNuevoB = alumnosB.map(alumno => {
    alumno.edad > 18 ? alumno.esMayor = true : alumno.esMayor = false
    return alumno
})
console.log(alumnosNuevoB)

// CODIGO C
let alumnosC = [
    { nombre: 'Juan', edad: 24 },
    { nombre: 'Pedro', edad: 19 },
    { nombre: 'Maria', edad: 22 },
    { nombre: 'Jose', edad: 28 },
    { nombre: 'Diego', edad: 18 },
]
alumnosC.map(alumno => alumno.edad > 18 ? alumno.esMayor = true : alumno.esMayor = false)
console.log(alumnosC)