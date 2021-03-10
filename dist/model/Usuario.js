"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginValidation = exports.validation = exports.Usuario = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Schema
} = _mongoose.default;
const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const validation = data => {
  //Joi validation schema
  const schema = _joi.default.object({
    nombre: _joi.default.string().required(),
    apellido: _joi.default.string().required(),
    user: _joi.default.string().min(4).max(20).alphanum().required(),
    password: _joi.default.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
    email: _joi.default.string().email()
  });

  return schema.validate(data);
};

exports.validation = validation;

const loginValidation = data => {
  const schema = _joi.default.object({
    email: _joi.default.string().email(),
    password: _joi.default.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required()
  });

  return schema.validate(data);
};

exports.loginValidation = loginValidation;

const Usuario = _mongoose.default.model('Usuario', UsuarioSchema);

exports.Usuario = Usuario;