"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Usuario = require("../model/Usuario");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UsuarioController {
  constructor() {}

  async findAll() {
    try {
      console.log('entro a findall ');
      let UsuarioList = await _Usuario.Usuario.find({});
      return UsuarioList;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }

  async findById(id) {
    try {
      let UsuarioResult = await _Usuario.Usuario.findById(id);
      return UsuarioResult;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }
  /*
  Metodo para crear usuarios
  recive un parametro de tipo Usuario
   */


  async create(entity) {
    console.log('entro a crear :v'); //HASH PASSWORD

    try {
      let salt = await _bcryptjs.default.genSalt(10);
      let hashedPassword = await _bcryptjs.default.hash(entity.password, salt);
      let NewUsuario = new _Usuario.Usuario({
        nombre: entity.nombre,
        apellido: entity.apellido,
        user: entity.user,
        password: hashedPassword,
        email: entity.email
      });
      let result = await NewUsuario.save();
      console.log(result);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, entity) {
    try {
      let UsuarioResult = await _Usuario.Usuario.findByIdAndUpdate(id, entity, {
        new: true
      });
      return UsuarioResult;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

  async delete(id) {
    try {
      let deletedUsuario = await _Usuario.Usuario.findByIdAndDelete(id);
      return deletedUsuario;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

}

var _default = UsuarioController;
exports.default = _default;