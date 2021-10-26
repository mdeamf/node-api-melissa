import express, { Request, Response } from 'express';
import ClientsController from '../controllers/clients.controller';
import Schemas from '../middlewares/validators/index';
import Validator from '../middlewares/validators/validator.middleware';
const router = express.Router();

/* router.post(
    '/',
    Validator.validator(Schemas.clientsValidator),
    ClientsController.createClient
); */

export default router;
