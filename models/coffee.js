'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Coffee.belongsTo(models.user, {
        constraints: true,
        onDelete: 'CASCADE'
      });
      models.Coffee.belongsToMany(models.Cart, {
        through: 'CartItem'
      });
      models.Coffee.belongsToMany(models.Order, {
        through: 'OrderItem'
      });
    }
  }
  Coffee.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    imageUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coffee',
  });
  return Coffee;
};