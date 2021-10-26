import express, { Request, Response } from 'express';
const router = express.Router();
import LoginController from '../controllers/login.controller';

router.post('/', LoginController.authenticate);

export default router;
