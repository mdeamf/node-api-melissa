'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Clientes', {
      type: 'foreign key',
      fields: ['celular'],
      name: 'celular',
      references: {
        table: 'Telefones',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Clientes', 'celular');
  },
};
