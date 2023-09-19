const { DataTypes, Model, STRING } = require("sequelize");
const { sequelize } = require("../db/database");

class Users extends Model {}

Users.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    adress: DataTypes.STRING,
    tel: DataTypes.STRING,
    rol: DataTypes.STRING
  },
  {
    sequelize,
    modelName: "users",
    timestamps: false, // Desactiva las columnas createdAt y updatedAt

  },
);
module.exports = Users;
