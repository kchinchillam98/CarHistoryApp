import { Usuario } from '../model/Usuario'

class UsuarioController {
    constructor() {

    }

    async findAll() {
        try {
            console.log('entro a findall ')
            let UsuarioList = await Usuario.find({});
            return UsuarioList
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async findById(id) {
        try {
            let UsuarioResult = await Usuario.findById(id);
            return UsuarioResult;
        } catch (error) {
            console.log('error de mongo' + error);
            throw 'error de mongo';
        }
    }

    async create(entity) {
        try {
            console.log('entro a crear :v')
            let NewUsuario = new Usuario({
                nombre: entity.nombre,
                modelos: entity.modelos
            });
            let result = await NewUsuario.save();
            console.log(result);

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id, entity) {
        try {
            let UsuarioResult = await Usuario.findByIdAndUpdate(id, entity, { new: true });
            return UsuarioResult;
        } catch (error) {
            console.log(error);
            throw 'error de mongo';
        }
    }

    async delete(id) {
        try {
            let deletedUsuario = await Usuario.findByIdAndDelete(id);
            return deletedUsuario;
        } catch (error) {
            console.log(error);
            throw 'error de mongo';
        }
    }


}

export default UsuarioController;