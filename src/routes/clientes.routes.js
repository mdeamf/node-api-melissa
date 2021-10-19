const { Router } = require("express");
const ClientesController = require("../controllers/clientes.controller");

const router = Router();

router.get("/", ClientesController.getClientes);

module.exports = router;
