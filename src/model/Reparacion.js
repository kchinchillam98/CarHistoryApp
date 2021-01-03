import {mongoose, Schema} from 'mongoose';
//const {Schema} = mongoose;

const ReparacionSchema = new Schema({
    vehiculo: String,
    fecha: {
        type: Date,
        default: Date.now,
        required: true
    },
    taller: {},
    procedimeinto: {String},
    total: Number,
    repuestos: [{nombre: String}]
})