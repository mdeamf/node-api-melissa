import objetoDeResposta from '../../utils/formata.objeto.de.resposta';
import { NextFunction, Request, Response } from 'express';

class Validator {
  //ERA ESTÁTICO
  validator(schema: any) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const options = {
          abortEarly: false, // incluir todos os erros
          allowUnknown: true, // ignorar propriedades desconhecidas
          stripUnknown: true, // remover propriedades desconhecidas
        };

        const { error } = schema.validate(req.body, options);

        const valid = error == null;

        if (valid) {
          next();
        } else {
          const obj = objetoDeResposta.formataObjeto(true, error, null);
          return res.status(400).json(obj);
        }
      } catch (error) {
        const obj = objetoDeResposta.formataObjeto(true, error, null);
        return res.status(400).json(obj);
      }
    };
  }
}

export default new Validator();
