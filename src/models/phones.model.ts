import mongoose from 'mongoose';

export interface Phone {
  ddd: String;
  numero: String;
  descricao: String;
}

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

const Phones = mongoose.model<Phone>('Phones', PhonesSchema);

export default Phones;
