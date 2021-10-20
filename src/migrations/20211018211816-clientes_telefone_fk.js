'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Clientes', {
      type: 'foreign key',
      fields: ['telefone'],
      name: 'telefone',
      references: {
        table: 'Telefones',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Clientes', 'telefone');
  },
};
