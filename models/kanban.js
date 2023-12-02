'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class kanban extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: 'users_id'
            })
            this.belongsTo(models.Job, {
                foreignKey: 'jobs_id'
            })
        }
    }

    kanban.init({
        users_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
            unique: true,
            primaryKey: true,
        },
        jobs_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Job',
                key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
            unique: true,
            primaryKey: true,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'applied'
        },
    }, {
        sequelize,
        modelName: 'kanban',
    });
    return kanban;
};