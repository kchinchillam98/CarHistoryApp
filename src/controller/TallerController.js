import Marca from '../model/Marca'

class MarcaController {
    constructor() {

    }

    async findAll() {
        try {
            console.log('entro a findall ')
            let MarcaList = await Marca.find({});
            return MarcaList
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async findById(id){
        try {
            let MarcaResult = await Marca.findById(id);
            return MarcaResult;
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async create(entity) {
        try {
            console.log('entro a crear :v')
            let NewMarca = new Marca({
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
            let MarcaResult = await Marca.findByIdAndUpdate(id, entity, {new: true});
            return MarcaResult;     
        } catch (error) {
            console.log(error);
            throw 'error de mongo';    
        }
     }

    async delete(id) {
        try {
          let deletedMarca = await Marca.findByIdAndDelete(id);  
          return deletedMarca;
        } catch (error) {
            console.log(error);
            throw 'error de mongo';
        }
     }


}

export default MarcaController;