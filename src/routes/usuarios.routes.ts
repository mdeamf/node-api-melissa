import express, { Request, Response } from 'express';
import UsuariosController from '../controllers/usuarios.controller';
const router = express.Router();

router.post('/', UsuariosController.createUsuario);

export default router;
