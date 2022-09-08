// Crear un diagrama de Clases
// Persona
// sus hijos son Docente, Ayudante, Alumno
// accion en comun -> respuesta

import Persona from './Class/Persona.js'
import Docente from './Class/Docente.js'
import Ayudante from './Class/Ayudante.js'
import Alumno from './Class/Alumno.js'

let personaObj = new Persona('11.111.111-1')
console.log(personaObj)
console.log(`El rut de la persona es: ${personaObj.rut}`)
console.log(personaObj.respuesta(personaObj))

let docenteObj = new Docente('22.222.222-2', 3)
console.log(docenteObj)
console.log(`El rut del docente es: ${docenteObj.rut}, la cantidad de años de servicio son: ${docenteObj.aniosServicio}`)
console.log(docenteObj.respuesta(docenteObj))

let ayudanteObj = new Ayudante('23.333.333-3', [{curso: 'Java'}, {curso: 'JavaScript'}, {curso: 'Python'}])
console.log(ayudanteObj)
console.log(`El rut del ayudante es: ${ayudanteObj.rut}, sus cursos aprobados son: ${ayudanteObj.cursosAprobados}`)

let alumnoObj = new Alumno('24.444.444-4', {cursando: 'FullStack JavaScript'})
console.log(alumnoObj)
console.log(`El rut del alumno es: ${alumnoObj.rut}, su curso actual es: ${alumnoObj.cursoActual.cursando}`)

