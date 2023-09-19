const { Sequelize } = require("sequelize");

// Configuración de la conexión sin especificar la base de datos
const sequelize = new Sequelize("mysql://root:gonzalo440151@localhost/ecommercefabregonzalo", {
  dialect: "mysql",
  define: {
    charset: 'utf8mb4',
  },

});



const syncDatabase = async () => {
  try {
    // Ahora puedes especificar la base de datos a la que deseas conectarte
    await sequelize.sync();
    console.log("Base de datos y tablas creadas o sincronizadas correctamente");
  } catch (error) {
    console.error("Error al sincronizar la base de datos: ", error);
  }
};

module.exports = { sequelize, syncDatabase };
