"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    // Inicializacion de la clase
    var _nombre;

    var _setNombre = function _setNombre(nombre) {
      return nombre != '' ? _nombre = nombre : _nombre = 'Error';
    };

    _setNombre(nombre);

    var _impuesto;

    var _setImpuesto = function _setImpuesto(impuesto) {
      return impuesto != {} ? _impuesto = impuesto : _impuesto = {};
    };

    _setImpuesto(impuesto); // Propiedades del objeto / clase


    this._getNombre = function () {
      return _nombre;
    };

    this._setNombre = _setNombre;

    this._getImpuesto = function () {
      return _impuesto;
    };

    this._setImpuesto = _impuesto;
  } // getters y setters


  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._getNombre();
    },
    set: function set(nombre) {
      this._setNombre(nombre);
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this._getImpuesto();
    },
    set: function set(impuesto) {
      this._setImpuesto(impuesto);
    } // metodo personalizado

  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return "El impuesto total a pagar por parte del cliente es: ".concat((this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21);
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;