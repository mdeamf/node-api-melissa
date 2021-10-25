import mongoose from 'mongoose';
import Schema = mongoose.Schema;

export interface Client {
  cliente_nome: String;
  cliente_nasc: Date;
  is_active: Boolean;
  endereco_id: Number;
  contatos: Array<String>;
}

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

const Clients = mongoose.model<Client>('Clients', ClientsSchema);

export default Clients;
