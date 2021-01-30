import mongoose from 'mongoose';
const { Schema } = mongoose;

const MarcaSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },
    modelos: [{
        nombre: {
            type: String,
            unique: true
        }
    }]
})

export default mongoose.model('Marca', MarcaSchema);