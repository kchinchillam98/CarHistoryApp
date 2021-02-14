import { Usuario } from '../model/Usuario'
import bcrypt from 'bcryptjs'

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

    /*
    Metodo para crear usuarios
    recive un parametro de tipo Usuario
     */
    async create(entity) {
        console.log('entro a crear :v');

        //HASH PASSWORD
        try {
            let salt = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash(entity.password, salt);

            let NewUsuario = new Usuario({
                nombre: entity.nombre,
                apellido: entity.apellido,
                user: entity.user,
                password: hashedPassword,
                email: entity.email
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