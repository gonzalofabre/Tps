const { error } = require("console");
const Users = require("../models/users");
module.exports = {
  register: async (req, res) => {
    const { userName, password, tel, adress } = req.body;

    const userRegistered = await Users.create({ email, password, tel, adress });

    return res
      .status(201)
      .json({ message: "Usuario creado", data: userRegistered });
  },
  login: async (req, res) => {
    try {
      const { userName, password } = req.body;
      const userFound = await Users.findOne({ where: { userName: userName } });

      if (!userFound) {
        return res
          .status(404)
          .json({ status: 404, message: "Usuario no encontrado" });
      }

      if (userFound.password === password) {
        return userFound.rol === "admin"
          ? res.json({
              data: {
                status: 200,
                message: "Admin logeado",
                userData: {
                  id: userFound.id,
                  userName: userFound.userName,
                  name: userFound.name,
                  lastName: userFound.lastName,
                  password: userFound.password,
                  adress: userFound.adress,
                  tel: userFound.tel,
                  rol: userFound.rol,
                },
              },
            })
          : res.json({
              data: {
                status: 200,
                message: "Usuario logeado",
                rol: userFound.rol,
                userData: {
                  id: userFound.id,
                  userName: userFound.userName,
                  name: userFound.name,
                  lastName: userFound.lastName,
                  password: userFound.password,
                  adress: userFound.adress,
                  tel: userFound.tel,
                  rol: userFound.rol,
                },
              },
            });
      } else {
        return res
          .status(401)
          .json({ status: 401, message: "Credenciales incorrectas" });
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ status: 500, message: "Error interno del servidor" });
    }
  },
};
