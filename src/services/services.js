const database = require('../models');

class Services {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...where } });
  }

  async pegaUmRegistro(where = {}) {
    return database[this.nomeDoModelo].findOne({ where: { ...where } });
  }

  async criaRegistro(dados) {
    return database[this.nomeDoModelo].create(dados);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    return database[this.nomeDoModelo].update(dadosAtualizados, {
      where: { id: id },
    });
  }

  async apagaRegistro(id) {
    return database[this.nomeDoModelo].destroy({ where: { id: id } });
  }
}

module.exports = Services;
