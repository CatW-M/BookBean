'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.order.belongsTo(models.user, {through: "coffeeId"});
      models.order.hasOne(models.coffee)
    }
  }
  order.init({
    coffeeId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    rated: DataTypes.INTEGER
  }, {
    sequelize: sequelize,
    modelName: 'order',
  });
  return order;
};