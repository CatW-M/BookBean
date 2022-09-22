'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.order.belongsTo(models.user);
      models.order.belongsToMany(models.coffee, {
        through: 'OrderItem'
      });
    }
  }
  Order.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};