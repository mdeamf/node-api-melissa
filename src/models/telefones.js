'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telefones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Telefones.belongsTo(models.TelefonesTipos, {
        as: "tipo_telefone",
        foreignKey: "telefone_tipo",
      });
    }
  };
  Telefones.init({
    telefone_tipo: DataTypes.INTEGER,
    ddd: DataTypes.STRING,
    numero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Telefones',
  });
  return Telefones;
};