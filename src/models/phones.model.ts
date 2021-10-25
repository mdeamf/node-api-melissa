import mongoose from 'mongoose';

const PhonesSchema = new mongoose.Schema({
    ddd: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
}, { timestamps: true });
    
const Phones = mongoose.model('Phones', PhonesSchema);
    
export default Phones;