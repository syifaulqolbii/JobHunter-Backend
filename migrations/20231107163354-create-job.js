'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      users_id: {
        type: Sequelize.INTEGER
      },
      job_name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM,
        values: ['fulltime', 'parttime', 'freelance'],
        defaultValue: 'fulltime'
      },
      category: {
        type: Sequelize.STRING
      },
      requirement: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      required_skill: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jobs');
  }
};