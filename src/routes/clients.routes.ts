import express, { Request, Response } from 'express';
import ClientsController from '../controllers/clients.controller';
import Schemas from "../middlewares/validators/schemas";
import Validator  from '../middlewares/validators/validators';
const router = express.Router();

/* router.post(
    '/',
    Validator.validator(Schemas.clientsValidator),
    ClientsController.createClient
); */

export default router;