import {mongoose, Schema} from 'mongoose';
//const {Schema} = mongoose;

const ProcedimientoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})