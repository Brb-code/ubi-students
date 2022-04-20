'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estuadiante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Estuadiante.init({
    nombre_completo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Estuadiante',
  });
  return Estuadiante;
};