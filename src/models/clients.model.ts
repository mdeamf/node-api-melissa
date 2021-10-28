import mongoose from 'mongoose';
import Schema = mongoose.Schema;
import { IClientBody } from '../interfaces/client.interface';

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
        ref: 'Addresses',
      },
    ],
    contatos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Phones',
      },
    ],
  },
  { timestamps: true }
);

const Clients = mongoose.model<IClientBody>('Clients', ClientsSchema);

export default Clients;
