import { Request, Response } from 'express';
import objetoDeResposta from '../utils/formata.objeto.de.resposta';
import service from '../services/login.service';

class LoginController {
  static async authenticate(req: Request, res: Response) {
    const dados = req.body;
    try {
      const usuario = await service.authenticate(dados);
      const token = service.generateToken(usuario);
      const obj = objetoDeResposta.formataObjeto(false, null, token);
      return res.status(200).json(obj);
    } catch (err) {
      const obj = objetoDeResposta.formataObjeto(true, err);
      return res.status(400).json(obj);
    }
  }
}

export default LoginController;
