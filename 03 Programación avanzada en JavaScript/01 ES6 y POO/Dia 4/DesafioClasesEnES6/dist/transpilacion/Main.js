"use strict";

var _Cliente = _interopRequireDefault(require("./Class/Cliente.js"));

var _Impuesto = _interopRequireDefault(require("./Class/Impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var miImpuesto = new _Impuesto["default"](10000, 8000);
var juan = new _Cliente["default"]('Juan', miImpuesto);
console.log(juan);
console.log("Cliente: ".concat(juan.nombre, ", Impuesto: ").concat(juan.impuesto.montoBrutoAnual, ", Deducciones: ").concat(juan.impuesto.deducciones));
console.log(juan.calcularImpuesto());