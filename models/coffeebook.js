'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coffeebook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.coffeebook.hasMany(models.coffee, {through: "coffeeId"});
      models.coffeebook.hasMany(models.book, {through: "bookId"});
    }
  }
  coffeebook.init({
    coffeeId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'coffeebook',
  });
  return coffeebook;
};