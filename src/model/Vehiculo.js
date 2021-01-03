import {mongoose, Schema} from 'mongoose';
//const {Schema} = mongoose;

const VehiculoSchema = new Schema({
    placa: {
        type: String,
        required: true
    },
    year: Number,
    modelo: String,
    marca: String,
    color: String
})