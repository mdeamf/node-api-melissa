'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cidades', [
      {
        cidade_nome: 'Cidade de São Paulo',
        cidade_uf: 'SP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cidade_nome: 'Belo Horizonte',
        cidade_uf: 'MG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cidade_nome: 'Campinas',
        cidade_uf: 'SP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cidades', null, {});
  },
};
