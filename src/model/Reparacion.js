import mongoose from 'mongoose';
const {Schema} = mongoose;

const ReparacionSchema = new Schema({
    vehiculo: String,
    fecha: {
        type: Date,
        default: Date.now,
        required: true
    },
    taller: {
        type: String
    },
    procedimientos: [{
        nombre: String
    }],
    repuestos: [{
        nombre: String
    }],
    descripcion: String,
    total: Number
    
})

export default mongoose.model('Reparacion', ReparacionSchema );