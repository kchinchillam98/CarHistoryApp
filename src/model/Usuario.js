import mongoose from 'mongoose';
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

export default mongoose.model('Usuario', UsuarioSchema );