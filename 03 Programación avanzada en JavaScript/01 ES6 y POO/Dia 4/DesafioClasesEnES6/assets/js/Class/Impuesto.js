export default class Impuesto {
    constructor(monto_bruto_anual, deducciones) {
        // Inicializacion de la clase
        let _montoBrutoAnual
        const _setMontoBrutoAnual = (monto_bruto_anual) => (monto_bruto_anual != '' ? (_montoBrutoAnual = monto_bruto_anual) : (_montoBrutoAnual = 0))
        _setMontoBrutoAnual(monto_bruto_anual)
        let _deducciones
        const _setDeducciones = (deducciones) => (deducciones != '' ? (_deducciones = deducciones) : (_deducciones = 0))
        _setDeducciones(deducciones)

        // Propiedades del objeto / clase
        this._getMontoBrutoAnual = () => _montoBrutoAnual
        this._setMontoBrutoAnual = _setMontoBrutoAnual
        this._getDeducciones = () => _deducciones
        this._setDeducciones = _setDeducciones
    }

    // getters y setters
    get montoBrutoAnual() {
        return this._getMontoBrutoAnual()
    }
    set montoBrutoAnual(monto_bruto_anual) {
        this._setMontoBrutoAnual(monto_bruto_anual)
    }
    get deducciones() {
        return this._getDeducciones()
    }
    set deducciones(deducciones) {
        this._setDeducciones(deducciones)
    }
}