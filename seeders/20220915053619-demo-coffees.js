'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('coffees', [
        {
        coffeeName: 'Chance Encounter',
        type: 'Medium',
        caffeinated: true,
        imageUrl: "coffee.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        coffeeName: 'English Cozy',
        type: 'Medium Dark',
        caffeinated: true,
        imageUrl: "coffee1.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        coffeeName: 'Atomic Blonde',
        type: 'Blonde',
        caffeinated: true,
        imageUrl: "coffee2.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        coffeeName: 'Big Easy',
        type: 'Medium',
        caffeinated: true,
        imageUrl: "coffee3.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        coffeeName: 'Smooth Operator',
        type: 'Medium',
        caffeinated: true,
        imageUrl: "coffee4.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        coffeeName: 'Moonshiner',
        type: 'Medium',
        caffeinated: true,
        imageUrl: "coffee5.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('coffees', null, {});
  }
};