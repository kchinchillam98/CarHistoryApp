"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Procedimiento = _interopRequireDefault(require("../model/Procedimiento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProcedimientoController {
  constructor() {}

  async findAll() {
    try {
      console.log('entro a findall ');
      let ProcedimientoList = await _Procedimiento.default.find({});
      return ProcedimientoList;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }

  async findById(id) {
    try {
      let ProcedimientoResult = await _Procedimiento.default.findById(id);
      return ProcedimientoResult;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }

  async create(entity) {
    try {
      console.log('entro a crear :v');
      let NewProcedimiento = new _Procedimiento.default({
        nombre: entity.nombre
      });
      let result = await NewProcedimiento.save();
      console.log(result);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, entity) {
    try {
      let ProcedimientoResult = await _Procedimiento.default.findByIdAndUpdate(id, entity, {
        new: true
      });
      return ProcedimientoResult;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

  async delete(id) {
    try {
      let deletedProcedimiento = await _Procedimiento.default.findByIdAndDelete(id);
      return deletedProcedimiento;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

}

var _default = ProcedimientoController;
exports.default = _default;