import { Request, Response } from 'express';
import objetoDeResposta from '../utils/formata.objeto.de.resposta';
import service from '../services/usuarios.service';

class UsuariosController {
  static async createUsuario(req: Request, res: Response) {
    const dados = req.body;
    try {
      const usuario = await service.createUser(dados);
      const obj = objetoDeResposta.formataObjeto(false, null, usuario);
      return res.status(200).json(obj);
    } catch (err) {
      const obj = objetoDeResposta.formataObjeto(true, err, null);
      return res.status(400).json(obj);
    }
  }
}

export default UsuariosController;
