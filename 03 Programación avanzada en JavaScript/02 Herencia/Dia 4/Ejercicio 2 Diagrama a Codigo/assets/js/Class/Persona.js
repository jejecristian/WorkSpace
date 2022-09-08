export default class Persona{
    constructor(rut){
        let _rut
        const _setRut = (rut) => (rut != '' ? (_rut = rut) : (_rut = 'vacio'))
        _setRut(rut)

        // Propiedades del objeto / clase
        this._getRut = () => _rut
        this._setRut = _setRut
    }

    // getters y setters
    get rut() {
        return this._getRut()
    }
    set rut(rut) {
        this._setRut(rut)
    }

    respuesta(objeto){
        console.log(`Este metodo fue invocado por ${objeto}`)
    }
}
