"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Schema
} = _mongoose.default;
const ReparacionSchema = new Schema({
  vehiculo: String,
  fecha: {
    type: Date,
    default: Date.now,
    required: true
  },
  taller: {
    type: String
  },
  procedimientos: [{
    nombre: String
  }],
  repuestos: [{
    nombre: String
  }],
  descripcion: String,
  total: Number
});

var _default = _mongoose.default.model('Reparacion', ReparacionSchema);

exports.default = _default;