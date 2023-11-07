'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Syifaul',
        email: 'syifaul@mail.com',
        address: 'Jl. Raya Bogor',
        password: '123456',
        phone: '081234567890',
        role: 'user',
        about: 'Saya adalah seorang web developer',
        skill: 'Javascript, PHP, Python',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PT Mencari Cinta Sejati',
        email: 'mencaricinta@mail.com',
        address: 'Jl. Raya Bogor',
        password: '123456',
        phone: '081234567890',
        role: 'company',
        about: 'Kami adalah perusahaan yang sedang mencari cinta sejati',
        skill: 'Javascript, PHP, Python',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
