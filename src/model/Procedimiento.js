import mongoose from 'mongoose';
const {Schema} = mongoose;

const ProcedimientoSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    }
})

export default mongoose.model('Procedimiento', ProcedimientoSchema );