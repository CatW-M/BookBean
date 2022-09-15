'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paymentInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  paymentInfo.init({
    userId: DataTypes.INTEGER,
    ccNumber: DataTypes.INTEGER,
    exp: DataTypes.STRING,
    frequency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paymentInfo',
  });
  return paymentInfo;
};