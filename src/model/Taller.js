import {mongoose, Schema} from 'mongoose';
//const {Schema} = mongoose;

const TallerSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})