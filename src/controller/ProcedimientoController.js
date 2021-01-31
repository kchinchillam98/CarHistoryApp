import Procedimiento from '../model/Procedimiento'

class ProcedimientoController {
    constructor() {

    }

    async findAll() {
        try {
            console.log('entro a findall ')
            let ProcedimientoList = await Procedimiento.find({});
            return ProcedimientoList
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async findById(id){
        try {
            let ProcedimientoResult = await Procedimiento.findById(id);
            return ProcedimientoResult;
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async create(entity) {
        try {
            console.log('entro a crear :v')
            let NewProcedimiento = new Procedimiento({
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
            let ProcedimientoResult = await Procedimiento.findByIdAndUpdate(id, entity, {new: true});
            return ProcedimientoResult;     
        } catch (error) {
            console.log(error);
            throw 'error de mongo';    
        }
     }

    async delete(id) {
        try {
          let deletedProcedimiento = await Procedimiento.findByIdAndDelete(id);  
          return deletedProcedimiento;
        } catch (error) {
            console.log(error);
            throw 'error de mongo';
        }
     }


}

export default ProcedimientoController;