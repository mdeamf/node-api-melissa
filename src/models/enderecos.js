'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enderecos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Enderecos.belongsTo(models.EnderecosTipos, {
        as: "tipo_endereco",
        foreignKey: "endereco_tipo",
      });

      Enderecos.belongsTo(models.Cidades, {
        as: "cidad",
        foreignKey: "cidade",
      });
    }
  };
  Enderecos.init({
    endereco_tipo: DataTypes.INTEGER,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enderecos',
  });
  return Enderecos;
};