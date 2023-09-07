const { DataTypes, Model, STRING } = require("sequelize");
const { sequelize } = require("../db/database");

class Products extends Model {}

Products.init(
  {
    name: DataTypes.STRING,
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    desc: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER
  },
  {
    sequelize,
    modelName: "products",
  }
);
module.exports = Products;