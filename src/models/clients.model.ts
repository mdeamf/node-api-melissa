import mongoose from 'mongoose';

const ClientsSchema = new mongoose.Schema({
    cliente_nome: {
        type: String,
        required: true,
    },
    cliente_nasc: {
        type: Date,
        required: true
    },
    is_active: {
        type: Boolean,
        required: true,
        default: true
    },
    endereco_id: [{
        type: Number,
        required: true,
    }],
    contatos: [{
        type: [String]
    }]
}, { timestamps: true });

const Clients = mongoose.model('Clients', ClientsSchema);

export default Clients;