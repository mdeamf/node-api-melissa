import mongoose from 'mongoose';
import Schema = mongoose.Schema;

const ClientsSchema = new mongoose.Schema(
  {
    cliente_nome: {
      type: String,
      required: true,
    },
    cliente_nasc: {
      type: Date,
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
    endereco_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'addresses',
      },
    ],
    contatos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'phones',
      },
    ],
  },
  { timestamps: true }
);

const Clients = mongoose.model('Clients', ClientsSchema);

export default Clients;
