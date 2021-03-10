"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Marca = _interopRequireDefault(require("../model/Marca"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MarcaController {
  constructor() {}

  async findAll() {
    try {
      console.log('entro a findall ');
      let MarcaList = await _Marca.default.find({});
      return MarcaList;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }

  async findById(id) {
    try {
      let MarcaResult = await _Marca.default.findById(id);
      return MarcaResult;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }

  async create(entity) {
    try {
      console.log('entro a crear :v');
      let NewMarca = new _Marca.default({
        nombre: entity.nombre,
        modelos: entity.modelos
      });
      let result = await NewMarca.save();
      console.log(result);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, entity) {
    try {
      let MarcaResult = await _Marca.default.findByIdAndUpdate(id, entity, {
        new: true
      });
      return MarcaResult;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

  async delete(id) {
    try {
      let deletedMarca = await _Marca.default.findByIdAndDelete(id);
      return deletedMarca;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

}

var _default = MarcaController;
exports.default = _default;