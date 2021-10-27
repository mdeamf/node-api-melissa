import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import objetoDeResposta from '../../utils/formata.objeto.de.resposta';

class jwtAuthorize {
  static verifyToken(req: Request, res: Response, next: NextFunction) {
    const header = req.headers.authorization || '';
    const secret = process.env.SECRET || '';
    try {
      jwt.verify(header, secret, (err: any, decoded: any) => {
        if (err) {
          throw new Error('Não autorizado!');
        } else {
          next();
        }
      });
    } catch (err) {
      const obj = objetoDeResposta.formataObjeto(true, err);
      return res.status(400).json(obj);
    }
  }
}

export default jwtAuthorize;
