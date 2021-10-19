'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Telefones', [
      {
        telefone_tipo: 1,
        ddd: "11",
        numero: "4002-8922",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        telefone_tipo: 2,
        ddd: "21",
        numero: "98844-1522",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        telefone_tipo: 1,
        ddd: "13",
        numero: "4758-9090",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        telefone_tipo: 2,
        ddd: "68",
        numero: "99999-5426",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Telefones', null, {});
  }
};
