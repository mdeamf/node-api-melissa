"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clientes.belongsTo(models.Enderecos, {
        as: "resid",
        foreignKey: "endereco_resid",
      });

      Clientes.belongsTo(models.Enderecos, {
        as: "comer",
        foreignKey: "endereco_comer",
      });

      Clientes.belongsTo(models.Telefones, {
        as: "tel",
        foreignKey: "telefone",
      });

      Clientes.belongsTo(models.Telefones, {
        as: "cel",
        foreignKey: "celular",
      });
    }
  }
  Clientes.init(
    {
      cliente_nome: DataTypes.STRING,
      cliente_nasc: DataTypes.DATEONLY,
      is_active: DataTypes.BOOLEAN,
      endereco_resid: DataTypes.INTEGER,
      endereco_comer: DataTypes.INTEGER,
      telefone: DataTypes.INTEGER,
      celular: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Clientes",
    }
  );
  return Clientes;
};
