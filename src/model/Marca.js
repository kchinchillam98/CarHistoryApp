import mongoose from 'mongoose';
const {Schema} = mongoose;

const MarcaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    modelos: [{
        nombre: String
    }]
})

export default mongoose.model('Marca', MarcaSchema );