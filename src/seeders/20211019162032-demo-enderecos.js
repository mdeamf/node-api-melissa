'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Enderecos', [
      {
       endereco_tipo: 1,
       rua: "Rua Principal",
       numero: "222",
       complemento: "B",
       bairro: "O Principal",
       cidade: 1,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       endereco_tipo: 2,
       rua: "Av M. L. Joao",
       numero: "678",
       complemento: "-",
       bairro: "Lindo Demais",
       cidade: 2,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       endereco_tipo: 1,
       rua: "Rua Fronteira",
       numero: "80",
       complemento: "A",
       bairro: "Praia",
       cidade: 3,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       endereco_tipo: 2,
       rua: "Av Horizonte Limpo",
       numero: "475r",
       complemento: "-",
       bairro: "Luiz Antonio",
       cidade: 1,
       createdAt: new Date(),
       updatedAt: new Date()
      }
    ])},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Enderecos', null, {});
  }
};
