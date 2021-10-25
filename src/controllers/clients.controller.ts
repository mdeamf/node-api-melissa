import { Request, Response } from 'express';
import objetoDeResposta from '../utils/formata.objeto.de.resposta';

class ClientsController {
    /* static async createClient(req: Request, res: Response){
      const data = req.body
      try {
        const obj = objetoDeResposta.formataObjeto(false, null, data);
        return res.status(200).json(obj);
      } catch (err) {
        const obj = objetoDeResposta.formataObjeto(true, err, null);
        return res.status(400).json(obj);
      }
    }  */
}

export default ClientsController;