import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from '../interfaces/user.interface';

const UsuariosSchema = new mongoose.Schema(
  {
    usuario_nome: {
      type: String,
      required: true,
      unique: true,
    },
    usuario_senha: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

UsuariosSchema.pre('save', async function (next) {
  if (this.isModified('usuario_senha')) {
    const user = this;
    const hash = await bcrypt.hash(user.usuario_senha, 2);
    user.usuario_senha = hash;
    next();
  } else {
    next();
  }
});

const Usuarios = mongoose.model<IUser>('Usuarios', UsuariosSchema);

export default Usuarios;
