import express from 'express';
import clientsRouter from './clients.routes';

const router = express.Router();

router.use('/clientes', clientsRouter);

export default router;
