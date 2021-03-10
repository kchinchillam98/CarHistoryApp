"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Reparacion = _interopRequireDefault(require("../model/Reparacion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ReparacionController {
  constructor() {}

  async findAll() {
    try {
      console.log('entro a findall ');
      let ReparacionList = await _Reparacion.default.find({});
      return ReparacionList;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }

  async findById(id) {
    try {
      let ReparacionResult = await _Reparacion.default.findById(id);
      return ReparacionResult;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }

  async create(entity) {
    try {
      console.log('entro a crear :v');
      let NewReparacion = new _Reparacion.default({
        vehiculo: entity.vehiculo,
        fecha: entity.fecha,
        taller: entity.taller,
        procedimientos: entity.procedimientos,
        repuestos: entity.repuestos,
        total: entity.total
      });
      let result = await NewReparacion.save();
      console.log(result);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, entity) {
    try {
      let ReparacionResult = await _Reparacion.default.findByIdAndUpdate(id, entity, {
        new: true
      });
      return ReparacionResult;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

  async delete(id) {
    try {
      let deletedReparacion = await _Reparacion.default.findByIdAndDelete(id);
      return deletedReparacion;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

}

var _default = ReparacionController;
exports.default = _default;