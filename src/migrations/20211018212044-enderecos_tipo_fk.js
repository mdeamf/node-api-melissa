'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Enderecos', {
      type: 'foreign key',
      fields: ['endereco_tipo'],
      name: 'endereco_tipo',
      references: {
        table: 'EnderecosTipos',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Enderecos', 'endereco_tipo');
  },
};
