import mongoose from 'mongoose';
import { IAddress } from '../interfaces/address.interface';

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

const Addresses = mongoose.model<IAddress>('Addresses', AddressesSchema);

export default Addresses;
