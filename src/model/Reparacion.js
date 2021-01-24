import {mongoose, Schema} from 'mongoose';
//const {Schema} = mongoose;

const ReparacionSchema = new Schema({
    vehiculo: String,
    fecha: {
        type: Date,
        default: Date.now,
        required: true
    },
    taller: {
        nombre: {
            type: String
        },
        ubicacion: {
            longitud: Number,
            latitud: Number
        }
    },
    procedimiento: [{
        nombre: String
    }],
    repuestos: [{
        nombre: String
    }],
    total: Number
    
})

export default mongoose.model('Reparacion', ReparacionSchema );