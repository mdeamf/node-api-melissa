'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Clientes', {
      type: 'foreign key',
      fields: ['endereco_comer'],
      name: 'endereco_comer',
      references: {
        table: 'Enderecos',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Clientes', 'endereco_comer');
  }
};
