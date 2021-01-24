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
    modelo: String,
    marca: String,
    color: String
})

export default mongoose.model('Vehiculo', VehiculoSchema );