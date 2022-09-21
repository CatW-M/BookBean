'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('Coffee',
      'description', {
        type: Sequelize.STRING
      });
      await queryInterface.addColumn('Coffee',
      'price', {
        type: Sequelize.DECIMAL(10,2)
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
   try {
    await queryInterface.removeColumn('Coffee','description');
    await queryInterface.removeColumn('Coffee','price');
    return Promise.resolve();
   } catch (e) {
    return Promise.reject(e);
   }
  }
};
