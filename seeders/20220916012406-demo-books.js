'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('books', [
        {
        title: '1984',
        author: 'George Orwell',
        genre: 'dystopian',
        imageUrl: "book.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        title: 'The Shining',
        author: 'Stephen King',
        genre: 'horror',
        imageUrl: "book1.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        title: 'All the Light We Cannot See',
        author: 'Anthony Doerr',
        genre: 'historical',
        imageUrl: "book2.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        title: 'The Thursday Murder Club',
        author: 'Richard Osman',
        genre: 'mystery',
        imageUrl: "book3.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        genre: 'science-fiction',
        imageUrl: "book4.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        title: 'The Colour of Magic',
        author: 'Terry Pratchett',
        genre: 'fantasy',
        imageUrl: "book7.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        title: 'Rubyfruit Jungle',
        author: 'Rita Mae Brown',
        genre: 'lgbtq',
        imageUrl: "book8.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        title: 'The Girl with the Dragon Tattoo',
        author: 'Stiegg Larsson',
        genre: 'thriller',
        imageUrl: "book6.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        title: 'The Bat',
        author: 'Joe Nesbo',
        genre: 'crime',
        imageUrl: "book9.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        title: 'Nine Lives',
        author: 'Danielle Steel',
        genre: 'romance',
        imageUrl: "book5.png",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, {});
}
};
