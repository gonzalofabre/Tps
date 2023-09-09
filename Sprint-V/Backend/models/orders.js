const { DataTypes, Model, STRING } = require("sequelize");
const { sequelize } = require("../db/database");

class Orders extends Model {}

Orders.init(
  {
    userId: DataTypes.INTEGER,
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    products: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "orders",
    timestamps: false,
  }
);
module.exports = Orders;