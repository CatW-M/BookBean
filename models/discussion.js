'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class discussion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.discussion.belongsTo(models.book);
    }
  }
  discussion.init({
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'discussion',
  });
  return discussion;
};