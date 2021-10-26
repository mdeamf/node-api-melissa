import Usuarios from '../models/usuarios.model';

class UsuariosService {
  static async createUser(dados: any) {
    const { usuario_nome, usuario_senha, is_active } = dados;

    const usuario = await Usuarios.create({
      usuario_nome,
      usuario_senha,
      is_active,
    });

    await usuario.save();

    return usuario;
  }
}

export default UsuariosService;
