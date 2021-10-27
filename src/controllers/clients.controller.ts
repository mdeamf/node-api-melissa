import { Request, Response } from 'express';
import objetoDeResposta from '../utils/formata.objeto.de.resposta';
import service from '../services/clients.service';

class ClientsController {
  static async createClientAndAddressPhone(req: Request, res: Response) {
    try {
      const cliente = await service.createClientAddressPhone(req.body);
      const obj = objetoDeResposta.formataObjeto(false, null, cliente);
      return res.status(200).json(obj);
    } catch (err) {
      const obj = objetoDeResposta.formataObjeto(true, err, null);
      return res.status(400).json(obj);
    }
  }
}

export default ClientsController;
