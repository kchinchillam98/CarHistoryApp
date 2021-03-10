"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Vehiculo = _interopRequireDefault(require("../model/Vehiculo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VehiculoController {
  constructor() {}

  async findAll() {
    try {
      console.log('entro a findall ');
      let VehiculoList = await _Vehiculo.default.find({});
      return VehiculoList;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }

  async findById(id) {
    try {
      let VehiculoResult = await _Vehiculo.default.findById(id);
      return VehiculoResult;
    } catch (error) {
      console.log('error de mongo' + error);
      throw 'error de mongo';
    }
  }

  async create(entity) {
    try {
      console.log('entro a crear :v');
      let NewVehiculo = new _Vehiculo.default({
        placa: entity.placa,
        year: entity.year,
        modelo: entity.modelo,
        marca: entity.marca,
        color: entity.color
      });
      let result = await NewVehiculo.save();
      console.log(result);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, entity) {
    try {
      let VehiculoResult = await _Vehiculo.default.findByIdAndUpdate(id, entity, {
        new: true
      });
      return VehiculoResult;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

  async delete(id) {
    try {
      let deletedVehiculo = await _Vehiculo.default.findByIdAndDelete(id);
      return deletedVehiculo;
    } catch (error) {
      console.log(error);
      throw 'error de mongo';
    }
  }

}

var _default = VehiculoController;
exports.default = _default;