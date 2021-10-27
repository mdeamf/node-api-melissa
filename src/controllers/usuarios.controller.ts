import { Request, Response } from 'express';
import objetoDeResposta from '../utils/formata.objeto.de.resposta';
import service from '../services/usuarios.service';

class UsuariosController {
  static async createUsuario(req: Request, res: Response) {
    try {
      const usuario = await service.createUser(req.body);
      const obj = objetoDeResposta.formataObjeto(false, null, usuario);
      return res.status(200).json(obj);
    } catch (err) {
      const obj = objetoDeResposta.formataObjeto(true, err);
      return res.status(400).json(obj);
    }
  }

  static async deactivate(req: Request, res: Response) {
    try {
      const usuario = await service.userInactive(req.body);
      const obj = objetoDeResposta.formataObjeto(false, null, usuario);
      return res.status(200).json(obj);
    } catch (err) {
      const obj = objetoDeResposta.formataObjeto(true, err);
      return res.status(400).json(obj);
    }
  }

  static async activate(req: Request, res: Response) {
    try {
      const usuario = await service.userActive(req.body);
      const obj = objetoDeResposta.formataObjeto(false, null, usuario);
      return res.status(200).json(obj);
    } catch (err) {
      const obj = objetoDeResposta.formataObjeto(true, err);
      return res.status(400).json(obj);
    }
  }
}

export default UsuariosController;
