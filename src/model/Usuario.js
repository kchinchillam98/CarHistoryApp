import mongoose from 'mongoose';
const { Schema } = mongoose;
import Joi from 'joi'

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})



const validation = (data) => {
    //Joi validation schema
    const schema = Joi.object({
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        user: Joi.string().min(4).max(20).alphanum().required(),
        password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
        email: Joi.string().email()
    })

    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
    })

    return schema.validate(data);
}

const Usuario = mongoose.model('Usuario', UsuarioSchema);
export { Usuario, validation, loginValidation };