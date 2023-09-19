const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mysql://root:contraseña@localhost/", {
  dialect: "mysql",
  define: {
    charset: 'utf8mb4',
  },
});

async function createDatabaseIfNotExists() {
    try {
      // Intenta crear la base de datos si no existe
      await sequelize.query("CREATE DATABASE IF NOT EXISTS ecommercefabregonzalo");
      console.log('Base de datos creada correctamente');
    } catch (error) {
      console.error('Error al crear base de datos', error);
    }
  }

  module.exports = createDatabaseIfNotExists;