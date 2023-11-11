'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init({
    users_id: DataTypes.INTEGER,
    job_name: DataTypes.STRING,
    type: DataTypes.ENUM('part-time', 'full-time'),
    category: DataTypes.STRING,
    requirement: DataTypes.STRING,
    description: DataTypes.STRING,
    required_skill: DataTypes.STRING,
    salary: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};