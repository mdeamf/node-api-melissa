const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
      message: 'A api está funcionando!',
    });
});


app.listen(process.env.PORT, () => { console.log(`O servidor está rodando na porta ${process.env.PORT}.`) });

module.exports = app;