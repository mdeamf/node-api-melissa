'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Clientes.init({
    cliente_nome: DataTypes.STRING,
    cliente_nasc: DataTypes.DATEONLY,
    is_active: DataTypes.BOOLEAN,
    endereco_resid: DataTypes.INTEGER,
    endereco_comer: DataTypes.INTEGER,
    telefone: DataTypes.INTEGER,
    celular: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};