import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { logger } from './logger';
import expressPinoLogger from 'express-pino-logger';
import objetoDeResposta from './utils/formata.objeto.de.resposta';
import mongoose from 'mongoose';
import router from './routes';

const app = express();
const port = process.env.PORT;
const mongodb = process.env.MONGODB_CNCTSTR || '';

app.use(express.json());
app.use(expressPinoLogger({ logger }));
app.use(cors());
app.use(router);

app.get('/', (req, res) => {
  const resposta = objetoDeResposta.formataObjeto(
    false,
    null,
    'A api está funcionando!'
  );
  res.status(200).json(resposta);
});

app.use((req, res) => {
  const err = new Error('Request inválida!');
  const resposta = objetoDeResposta.formataObjeto(true, err);
  res.status(404).json(resposta);
});

mongoose.connect(mongodb, (err) => {
  if (err) {
    console.log('MongoDB => Conexão falhou...', err);
  } else {
    console.log('MongoDB => Conectado com sucesso!');
  }
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}.`);
});

export default app;
