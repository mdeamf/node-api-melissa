'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clientes', [
      {
        cliente_nome: 'Joao da Silva',
        cliente_nasc: '1968-04-01',
        is_active: true,
        endereco_resid: 3,
        endereco_comer: 4,
        telefone: 1,
        celular: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cliente_nome: 'Maria das Luzes',
        cliente_nasc: '1950-02-17',
        is_active: false,
        endereco_resid: 1,
        endereco_comer: 2,
        telefone: 3,
        celular: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clientes', null, {});
  },
};
