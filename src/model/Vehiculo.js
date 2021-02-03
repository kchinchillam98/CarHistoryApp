import mongoose from 'mongoose';
const {Schema} = mongoose;

const VehiculoSchema = new Schema({
    placa: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Number,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    
    color: String
})

export default mongoose.model('Vehiculo', VehiculoSchema );