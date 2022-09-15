'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  coffee.init({
    coffeeName: DataTypes.STRING,
    type: DataTypes.STRING,
    caffeinated: DataTypes.BOOLEAN,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'coffee',
  });
  return coffee;
};