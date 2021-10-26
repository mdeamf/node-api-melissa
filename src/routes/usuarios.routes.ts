import express, { Request, Response } from 'express';
import UsuariosController from '../controllers/usuarios.controller';
const router = express.Router();
import Schemas from '../middlewares/validators';
import Validator from '../middlewares/validators/validator.middleware';

router.post(
  '/',
  Validator.validator(Schemas.usuariosValidator),
  UsuariosController.createUsuario
);

export default router;
