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
const TallerSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  ubicacion: {
    longitud: Number,
    latitud: Number
  }
});

var _default = _mongoose.default.model('Taller', TallerSchema);

exports.default = _default;