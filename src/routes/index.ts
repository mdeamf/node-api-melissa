import express from 'express';
import loginRouter from './login.routes';
import clientsRouter from './clients.routes';
import usuariosRouter from './usuarios.routes';

const router = express.Router();

router.use('/clientes', clientsRouter);
router.use('/usuario', usuariosRouter);

export default router;
