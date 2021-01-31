import Reparacion from '../model/Reparacion'

class ReparacionController {
    constructor() {

    }

    async findAll() {
        try {
            console.log('entro a findall ')
            let ReparacionList = await Reparacion.find({});
            return ReparacionList
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async findById(id){
        try {
            let ReparacionResult = await Reparacion.findById(id);
            return ReparacionResult;
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async create(entity) {
        try {
            console.log('entro a crear :v')
            let NewReparacion = new Reparacion({
                vehiculo: entity.vehiculo,
                fecha: entity.fecha,
                taller: {
                    nombre: entity.taller.nombre,
                    ubicacion: entity.taller.ubicacion
                },
                procedimiento: entity.procedimientos,
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
            let ReparacionResult = await Reparacion.findByIdAndUpdate(id, entity, {new: true});
            return ReparacionResult;     
        } catch (error) {
            console.log(error);
            throw 'error de mongo';    
        }
     }

    async delete(id) {
        try {
          let deletedReparacion = await Reparacion.findByIdAndDelete(id);  
          return deletedReparacion;
        } catch (error) {
            console.log(error);
            throw 'error de mongo';
        }
     }


}

export default ReparacionController;