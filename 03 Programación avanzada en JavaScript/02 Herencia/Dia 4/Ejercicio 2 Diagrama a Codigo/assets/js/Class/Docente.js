import Persona from './Persona.js'

export default class Docente extends Persona{
    constructor(rut, anios_servicio){
        super(rut)
        let _aniosServicio
        const _setAniosServicio = (anios_servicio) => (anios_servicio != 0 ? (_aniosServicio = anios_servicio) : (_aniosServicio = 0))
        _setAniosServicio(anios_servicio)

        // Propiedades del objeto / clase
        this._getAniosServicio = () => _aniosServicio
        this._setAniosServicio = _setAniosServicio
    }

    // getters y setters
    get aniosServicio() {
        return this._getAniosServicio()
    }
    set aniosServicio(anios_servicio) {
        this._setAniosServicio(anios_servicio)
    }

    respuesta(objeto){
        console.log(`Este metodo fue invocado por ${typeof(objeto)}`)
    }
}
