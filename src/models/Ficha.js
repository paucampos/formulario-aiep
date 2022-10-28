import { Schema, model} from "mongoose";

const fichaSchema = new Schema({
    rut: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombres: {
        type: String,
        required: true,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    fono: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },  
    fechaNacimiento: {
        type: Date,
        required: true
    },
    estadoCivil: {
        type: String,
        required: true,
        trim: true
    },
    comentario: String 
}, {
    timestamps: true,
    versionKey: false
})

export default model('Ficha', fichaSchema);