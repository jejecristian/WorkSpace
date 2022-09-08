import Persona from './Persona.js'

export default class Ayudante extends Persona{
    constructor(rut, cursos_aprobados){
        super(rut)
        let _cursosAprobados
        const _setCursosAprobados = (cursos_aprobados) => (cursos_aprobados != [] ? (_cursosAprobados = cursos_aprobados) : (_cursosAprobados = []))
        _setCursosAprobados(cursos_aprobados)

        // Propiedades del objeto / clase
        this._getCursosAprobados = () => _cursosAprobados
        this._setCursosAprobados = _setCursosAprobados
    }

    // getters y setters
    get cursosAprobados() {
        return this._getCursosAprobados()
    }
    set cursosAprobados(cursos_aprobados) {
        this._setCursosAprobados(cursos_aprobados)
    }

    respuesta(objeto){
        console.log(`Este metodo fue invocado por ${typeof(objeto)}`)
    }

    ayudantia(){
        let cantidad_ayudantias = 3
        return cantidad_ayudantias
    }
}
