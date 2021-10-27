import mongoose from 'mongoose';
import { IPhone } from '../interfaces/phone.interface';

const PhonesSchema = new mongoose.Schema(
  {
    ddd: {
      type: String,
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Phones = mongoose.model<IPhone>('Phones', PhonesSchema);

export default Phones;
