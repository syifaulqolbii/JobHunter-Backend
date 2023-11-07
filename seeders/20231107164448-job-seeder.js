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

    await queryInterface.bulkInsert('Jobs', [
      {
        users_id: 2,
        job_name: 'Frontend Developer',
        type: 'fulltime',
        category: 'IT',
        requirement: 'S1',
        description: 'Membuat aplikasi web dengan menggunakan HTML, CSS, dan Javascript',
        required_skill: 'HTML, CSS, Javascript',
        salary: 'Rp. 10.000.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        users_id: 2,
        job_name: 'Backend Developer',
        type: 'fulltime',
        category: 'IT',
        requirement: 'S1',
        description: 'Membuat aplikasi web dengan menggunakan PHP, NodeJS, dan Python',
        required_skill: 'PHP, NodeJS, Python',
        salary: 'Rp. 10.000.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        users_id: 2,
        job_name: 'UI/UX Designer',
        type: 'fulltime',
        category: 'IT',
        requirement: 'S1',
        description: 'Membuat desain aplikasi web dan mobile',
        required_skill: 'Adobe XD, Figma, Photoshop',
        salary: 'Rp. 10.000.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        users_id: 2,
        job_name: 'Frontend Developer',
        type: 'fulltime',
        category: 'IT',
        requirement: 'S1',
        description: 'Membuat aplikasi web dengan menggunakan HTML, CSS, dan Javascript',
        required_skill: 'HTML, CSS, Javascript',
        salary: 'Rp. 10.000.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        users_id: 2,
        job_name: 'Backend Developer',
        type: 'fulltime',
        category: 'IT',
        requirement: 'S1',
        description: 'Membuat aplikasi web dengan menggunakan PHP, NodeJS, dan Python',
        required_skill: 'PHP, NodeJS, Python',
        salary: 'Rp. 10.000.000',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
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
