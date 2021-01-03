import {mongoose, Schema, model} from 'mongoose';
//const {Schema} = mongoose;

const ModeloSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    marca: String
})

export default model('Modelo', ModeloSchema);