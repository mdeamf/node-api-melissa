import mongoose from 'mongoose';

export interface Address {
  rua: String;
  numero: String;
  complemento: String;
  bairro: String;
  cep: String;
  cidade: String;
}

const AddressesSchema = new mongoose.Schema(
  {
    rua: {
      type: String,
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
    complemento: {
      type: String,
    },
    bairro: {
      type: String,
    },
    cep: {
      type: String,
    },
    cidade: {
      type: String,
    },
  },
  { timestamps: true }
);

const Addresses = mongoose.model<Address>('Addresses', AddressesSchema);

export default Addresses;
