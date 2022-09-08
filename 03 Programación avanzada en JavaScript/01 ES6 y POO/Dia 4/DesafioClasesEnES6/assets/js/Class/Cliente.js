export default class Cliente {
    constructor(nombre, impuesto) {
        // Inicializacion de la clase
        let _nombre
        const _setNombre = (nombre) => (nombre != '' ? (_nombre = nombre) : (_nombre = 'Error'))
        _setNombre(nombre)

        let _impuesto
        const _setImpuesto = (impuesto) => (impuesto != {} ? (_impuesto = impuesto) : (_impuesto = {}))
        _setImpuesto(impuesto)

        // Propiedades del objeto / clase
        this._getNombre = () => _nombre
        this._setNombre = _setNombre
        this._getImpuesto = () => _impuesto
        this._setImpuesto = _impuesto
    }

    // getters y setters
    get nombre() {
        return this._getNombre()
    }
    set nombre(nombre) {
        this._setNombre(nombre)
    }
    get impuesto() {
        return this._getImpuesto()
    }
    set impuesto(impuesto) {
        this._setImpuesto(impuesto)
    }

    // metodo personalizado
    calcularImpuesto() {
        return `El impuesto total a pagar por parte del cliente es: ${((this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21)}`
    }
}


