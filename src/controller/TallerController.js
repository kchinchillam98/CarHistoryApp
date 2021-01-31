import Taller from '../model/Taller'

class TallerController {
    constructor() {

    }

    async findAll() {
        try {
            console.log('entro a findall ')
            let TallerList = await Taller.find({});
            return TallerList
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async findById(id){
        try {
            let TallerResult = await Taller.findById(id);
            return TallerResult;
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async create(entity) {
        try {
            console.log('entro a crear :v')
            let NewTaller = new Taller({
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
            let TallerResult = await Taller.findByIdAndUpdate(id, entity, {new: true});
            return TallerResult;     
        } catch (error) {
            console.log(error);
            throw 'error de mongo';    
        }
     }

    async delete(id) {
        try {
          let deletedTaller = await Taller.findByIdAndDelete(id);  
          return deletedTaller;
        } catch (error) {
            console.log(error);
            throw 'error de mongo';
        }
     }


}

export default TallerController;