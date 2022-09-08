import Persona from './Persona.js'

export default class Alumno extends Persona{
    constructor(rut, curso_actual){
        super(rut)
        let _cursoActual
        const _setCursoActual = (curso_actual) => (curso_actual != {} ? (_cursoActual = curso_actual) : (_cursoActual = {}))
        _setCursoActual(curso_actual)

        // Propiedades del objeto / clase
        this._getCursoActual = () => _cursoActual
        this._setCursoActual = _setCursoActual
    }

    // getters y setters
    get cursoActual() {
        return this._getCursoActual()
    }
    set cursoActual(curso_actual) {
        this._setCursoActual(curso_actual)
    }

    respuesta(objeto){
        console.log(`Este metodo fue invocado por ${typeof(objeto)}`)
    }

    encuestaSatisfaccion(){
        return 'El curso está genial!'
    }
}
