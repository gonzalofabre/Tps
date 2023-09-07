const  { Sequelize }  = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "gonzalo440151" , {
  host: "localhost",
  dialect: "mysql",
});


module.exports = {sequelize}
