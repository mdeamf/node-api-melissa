'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('EnderecosTipos', [
      {
        tipo: 'residencial',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'comercial',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('EnderecosTipos', null, {});
  },
};
