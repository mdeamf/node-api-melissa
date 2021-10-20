'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TelefonesTipos', [
      {
        tipo: 'telefone',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'celular',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TelefonesTipos', null, {});
  },
};
