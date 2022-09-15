'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userDetail.init({
    userId: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postCode: DataTypes.INTEGER,
    birthday: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'userDetail',
  });
  return userDetail;
};