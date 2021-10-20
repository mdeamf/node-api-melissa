const Services = require('./services');
const database = require('../models');
const {
  Enderecos,
  EnderecosTipos,
  Cidades,
  Telefones,
  TelefonesTipos,
} = require('../models');

class ClientesService extends Services {
  constructor() {
    super('Clientes');
  }

  /**
   * Esta função realiza a consulta findAll no banco de dados.
   * @param {*} dados recebe todos os dados da consulta.
   * @returns faz o envio dos dados recebidos para o getClientes no controller.
   */
  async pegaTodosOsRegistros(where = {}) {
    const dados = await database[this.nomeDoModelo].findAll({
      attributes: ['id', 'cliente_nome', 'is_active'],
      include: [
        {
          model: Enderecos,
          as: 'resid',
          attributes: ['rua', 'numero', 'complemento', 'bairro', 'cidade'],
          include: [
            this.criaInclude(EnderecosTipos, 'tipo_endereco', 'id', 'tipo'),
            this.criaInclude(Cidades, 'cidad', 'cidade_nome', 'cidade_uf'),
          ],
        },
        {
          model: Enderecos,
          as: 'comer',
          attributes: ['rua', 'numero', 'complemento', 'bairro', 'cidade'],
          include: [
            this.criaInclude(EnderecosTipos, 'tipo_endereco', 'id', 'tipo'),
            this.criaInclude(Cidades, 'cidad', 'cidade_nome', 'cidade_uf'),
          ],
        },
        {
          model: Telefones,
          as: 'tel',
          attributes: ['ddd', 'numero'],
          include: [
            this.criaInclude(TelefonesTipos, 'tipo_telefone', 'id', 'tipo'),
          ],
        },
      ],
    });

    return dados;
  }

  /**
   * Esta função cria um objeto para o include.
   * @param {*} model recebe o nome do modelo/tabela no banco de dados.
   * @param {string} as recebe o apelido da tabela.
   * @param  {'id' | 'tipo'} attributes recebe os campos de consulta.
   * @returns retorna o objeto criado para a função findAll.
   */
  criaInclude(model, as, ...attributes) {
    return {
      model,
      as,
      attributes: attributes,
    };
  }
}

module.exports = ClientesService;
