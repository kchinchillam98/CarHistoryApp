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
const ProcedimientoSchema = new Schema({
  nombre: {
    type: String,
    unique: true,
    required: true
  }
});

var _default = _mongoose.default.model('Procedimiento', ProcedimientoSchema);

exports.default = _default;