'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('kanbans', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            users_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },
            jobs_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Jobs',
                    key: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },
            status: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'applied'
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
        await queryInterface.dropTable('kanbans');
    }
};