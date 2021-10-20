'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Enderecos', {
      type: 'foreign key',
      fields: ['cidade'],
      name: 'cidade',
      references: {
        table: 'Cidades',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Enderecos', 'cidade');
  },
};
