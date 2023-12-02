"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Job, {
        foreignKey: "users_id",
      });
    }
  }

  User.init(
    {
      profil: DataTypes.BLOB,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      role: DataTypes.ENUM("company", "user"),
      about: DataTypes.STRING,
      skill: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
