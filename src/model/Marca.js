import {mongoose, Schema} from 'mongoose';
//const {Schema} = mongoose;

const MarcaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})