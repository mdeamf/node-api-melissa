const { clientesService } = require('../services');
const service = new clientesService();
const objetoDeResposta = require('./formata.objeto.de.resposta');

class ClientesController {
  /**
   * Esta função retorna todos os clientes do sistema.
   * @param {*} todosClientes recebe do service a lista de objetos cliente.
   * @param {*} obj recebe a lista e formata p/ o objeto de resposta da requisição.
   * @returns conclui o envio do response com status 200 e a lista de clientes formatada.
   */
  static async getClientes(req, res) {
    try {
      const todosClientes = await service.pegaTodosOsRegistros();
      const obj = objetoDeResposta.formataObjeto(false, null, todosClientes);
      return res.status(200).json(obj);
    } catch (err) {
      const obj = objetoDeResposta.formataObjeto(true, err);
      return res.status(400).json(obj);
    }
  }

  /**
   * Esta função retorna um cliente.
   * @param {*} cliente recebe do service um objeto cliente.
   * @param {*} obj recebe o objeto e formata p/ o objeto de resposta da requisição.
   * @returns conclui o envio do response com status 200 e o objeto formatado.
   */
  static async getClienteById(req, res){
    try {
      const cliente = await service.pegaUmRegistro(req.params.id);
      const obj = objetoDeResposta.formataObjeto(false, null, cliente);
      return res.status(200).json(obj);
    } catch (err) {
      const obj = objetoDeResposta.formataObjeto(true, err);
      return res.status(400).json(obj);
    }
  }
}

module.exports = ClientesController;
