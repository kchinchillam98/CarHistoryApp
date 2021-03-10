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
const MarcaSchema = new Schema({
  nombre: {
    type: String,
    unique: true,
    required: true
  },
  modelos: [{
    nombre: {
      type: String,
      unique: true
    }
  }]
});

var _default = _mongoose.default.model('Marca', MarcaSchema);

exports.default = _default;