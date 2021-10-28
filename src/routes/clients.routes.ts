import express, { Request, Response } from 'express';
import ClientsController from '../controllers/clients.controller';
import Schemas from '../middlewares/validators';
import Validator from '../middlewares/validators/validator.middleware';
const router = express.Router();
import jwt from '../middlewares/jwt/authorize.middleware';

router.get('/', jwt.verifyToken, ClientsController.getClients);

router.post(
  '/',
  jwt.verifyToken,
  Validator.validator(Schemas.clientsValidator),
  ClientsController.createClientAndAddressPhone
);

export default router;
