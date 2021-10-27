import express, { Request, Response } from 'express';
import UsuariosController from '../controllers/usuarios.controller';
const router = express.Router();
import Schemas from '../middlewares/validators';
import Validator from '../middlewares/validators/validator.middleware';
import jwt from '../middlewares/jwt/authorize.middleware';

router.post(
  '/',
  Validator.validator(Schemas.usuariosValidator),
  jwt.verifyToken,
  UsuariosController.createUsuario
);
router.patch('/desativar', UsuariosController.deactivate);
router.patch('/ativar', UsuariosController.activate);

export default router;
