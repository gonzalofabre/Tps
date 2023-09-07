const { DataTypes, Model, STRING } = require("sequelize");
const { sequelize } = require("../db/database");

class Users extends Model {}

Users.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    adress: DataTypes.STRING,
    tel: DataTypes.INTEGER,
    rol: DataTypes.STRING
  },
  {
    sequelize,
    modelName: "users",
  }
);
module.exports = Users;
