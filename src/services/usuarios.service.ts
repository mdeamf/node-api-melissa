import Usuarios from '../models/usuarios.model';
import { IUser } from '../interfaces/user.interface';

class UsuariosService {
  static async createUser(dados: IUser) {
    const { usuario_nome, usuario_senha, is_active } = dados;

    const usuario = await Usuarios.create({
      usuario_nome,
      usuario_senha,
      is_active,
    });

    await usuario.save();

    return usuario;
  }

  static async userInactive(dados: any) {
    const { _id } = dados;
    const usuario = await Usuarios.findByIdAndUpdate(
      { _id: _id },
      { is_active: false },
      { new: true }
    );
    return usuario;
  }

  static async userActive(dados: any) {
    const { _id } = dados;
    const usuario = await Usuarios.findByIdAndUpdate(
      { _id: _id },
      { is_active: true },
      { new: true }
    );
    return usuario;
  }
}

export default UsuariosService;
