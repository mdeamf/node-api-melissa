const express = require('express');
const cors = require("cors");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();
const logger = require('./logger');
const pinoHttp = require('pino-http')({logger});

const app = express();

app.use(express.json());
app.use(pinoHttp);
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.status(200).json({
      message: 'A api está funcionando!',
    });
});


app.listen(process.env.PORT, () => { console.log(`O servidor está rodando na porta ${process.env.PORT}.`) });

module.exports = app;