"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Impuesto = /*#__PURE__*/function () {
  function Impuesto(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuesto);

    // Inicializacion de la clase
    var _montoBrutoAnual;

    var _setMontoBrutoAnual = function _setMontoBrutoAnual(monto_bruto_anual) {
      return monto_bruto_anual != '' ? _montoBrutoAnual = monto_bruto_anual : _montoBrutoAnual = 0;
    };

    _setMontoBrutoAnual(monto_bruto_anual);

    var _deducciones;

    var _setDeducciones = function _setDeducciones(deducciones) {
      return deducciones != '' ? _deducciones = deducciones : _deducciones = 0;
    };

    _setDeducciones(deducciones); // Propiedades del objeto / clase


    this._getMontoBrutoAnual = function () {
      return _montoBrutoAnual;
    };

    this._setMontoBrutoAnual = _setMontoBrutoAnual;

    this._getDeducciones = function () {
      return _deducciones;
    };

    this._setDeducciones = _setDeducciones;
  } // getters y setters


  _createClass(Impuesto, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._getMontoBrutoAnual();
    },
    set: function set(monto_bruto_anual) {
      this._setMontoBrutoAnual(monto_bruto_anual);
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._getDeducciones();
    },
    set: function set(deducciones) {
      this._setDeducciones(deducciones);
    }
  }]);

  return Impuesto;
}();

exports["default"] = Impuesto;