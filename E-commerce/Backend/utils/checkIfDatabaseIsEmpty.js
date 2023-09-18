const  Users  = require("../models/users");

async function checkIfDatabaseIsEmpty () {
    try {
        const count = await Users.count();

        if (count === 0 ) {
            return true //Si da 0 es porque la base de Datos esta vacía
        } else {
            return false
        }
    } catch (error) {
        console.error("Error al intentar verificar si la base de datos está vacía", error)
    }
}

module.exports = checkIfDatabaseIsEmpty;