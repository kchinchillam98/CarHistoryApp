"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Taller = _interopRequireDefault(require("../model/Taller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TallerController {
  constructor() {}

  async findAll() {
    try {
      console.log('entro a findall ');
      let TallerList = await _Taller.default.find({});
      return TallerList;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }

  async findById(id) {
    try {
      let TallerResult = await _Taller.default.findById(id);
      return TallerResult;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }

  async create(entity) {
    try {
      console.log('entro a crear :v');
      let NewTaller = new _Taller.default({
        nombre: entity.nombre,
        ubicacion: entity.ubicacion
      });
      let result = await NewTaller.save();
      console.log(result);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, entity) {
    try {
      let TallerResult = await _Taller.default.findByIdAndUpdate(id, entity, {
        new: true
      });
      return TallerResult;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

  async delete(id) {
    try {
      let deletedTaller = await _Taller.default.findByIdAndDelete(id);
      return deletedTaller;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

}

var _default = TallerController;
exports.default = _default;