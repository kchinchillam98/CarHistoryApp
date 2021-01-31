import Vehiculo from '../model/Vehiculo'

class VehiculoController {
    constructor() {

    }

    async findAll() {
        try {
            console.log('entro a findall ')
            let VehiculoList = await Vehiculo.find({});
            return VehiculoList
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async findById(id){
        try {
            let VehiculoResult = await Vehiculo.findById(id);
            return VehiculoResult;
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async create(entity) {
        try {
            console.log('entro a crear :v')
            let NewVehiculo = new Vehiculo({
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
            let VehiculoResult = await Vehiculo.findByIdAndUpdate(id, entity, {new: true});
            return VehiculoResult;     
        } catch (error) {
            console.log(error);
            throw 'error de mongo';    
        }
     }

    async delete(id) {
        try {
          let deletedVehiculo = await Vehiculo.findByIdAndDelete(id);  
          return deletedVehiculo;
        } catch (error) {
            console.log(error);
            throw 'error de mongo';
        }
     }


}

export default VehiculoController;