import bcrypt from 'bcryptjs';
import Usuarios from '../models/usuarios.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

class LoginService {
  static async authenticate(dados: any) {
    const { nome, senha } = dados;

    const usuario = await Usuarios.findOne({ usuario_nome: nome });

    if (!usuario) {
      throw new Error('Usuário inexistente!');
    }

    const valid = await bcrypt.compare(senha, usuario.usuario_senha);

    if (!valid) {
      throw new Error('Senha inválida. Não foi possível concluir o login!');
    }

    return usuario;
  }

  static generateToken(usuario: any) {
    const secret = process.env.SECRET || '';
    const token = jwt.sign({ id: usuario._id }, secret, {
      expiresIn: 86400,
    });
    return token;
  }
}

export default LoginService;
