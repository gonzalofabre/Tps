const { DataTypes, Model, STRING } = require("sequelize");
const { sequelize } = require("../db/database");

class Orders extends Model {}

Orders.init(
  {
    idUser: DataTypes.INTEGER,
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    products: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "ordenes",
  }
);
module.exports = Orders;