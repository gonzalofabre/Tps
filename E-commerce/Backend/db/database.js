const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "gonzalo440151", {
  host: "localhost",
  dialect: "mysql",
});

const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log("Base de datos y tablas creadas o sincronizadas correctamente");
  } catch (error) {
    console.error("Error al sincronizar la base de datos: ", error);
  }
};

module.exports = { sequelize, syncDatabase };
