const { DataTypes, Model, STRING } = require("sequelize");
const { sequelize } = require("../db/database");

class Products extends Model {}

Products.init(
  {
    title: DataTypes.STRING,
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING
  },
  {
    sequelize,
    modelName: "products",
    timestamps: false,
  }
);
module.exports = Products;