const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const dotenv = require('dotenv');
dotenv.config();
const logger = require('./logger');
const pinoHttp = require('pino-http')({ logger });
const objetoDeResposta = require('./controllers/formata.objeto.de.resposta');

const app = express();

app.use(express.json());
app.use(pinoHttp);
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
  const resposta = objetoDeResposta.formataObjeto(
    false,
    null,
    'A api está funcionando!'
  );
  res.status(200).json(resposta);
});

app.use((req, res, next) => {
  const err = new Error('Request inválida!');
  const resposta = objetoDeResposta.formataObjeto(true, err);
  res.status(404).json(resposta);
});

app.listen(process.env.PORT, () => {
  console.log(`O servidor está rodando na porta ${process.env.PORT}.`);
});

module.exports = app;
