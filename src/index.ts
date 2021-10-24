import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { logger } from "./logger";
import expressPinoLogger from "express-pino-logger";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(expressPinoLogger({ logger }));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({message: 'A api está funcionando!'});
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}.`);
});
  
module.exports = app;