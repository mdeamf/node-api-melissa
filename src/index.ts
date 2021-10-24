import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { logger } from "./logger";
import expressPinoLogger from "express-pino-logger";
import objetoDeResposta from './utils/formata.objeto.de.resposta';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(expressPinoLogger({ logger }));
app.use(cors());

app.get('/', (req, res) => {
    const resposta = objetoDeResposta.formataObjeto(
        false,
        null,
        'A api está funcionando!'
    );
    res.status(200).json(resposta);
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}.`);
});
  
export default app;