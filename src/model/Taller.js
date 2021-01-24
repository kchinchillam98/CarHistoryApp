import mongoose from 'mongoose';
const {Schema} = mongoose;

const TallerSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    ubicacion: {
        longitud: Number,
        latitud: Number
    }
})

export default mongoose.model('Taller', TallerSchema );
