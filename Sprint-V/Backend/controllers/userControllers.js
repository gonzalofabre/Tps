const { error } = require('console');
const Users = require('../models/users');
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

    //   return userFound === null
    //     ? res.status(404).json({status: 404, message: "Usuario no encontrado"})
    //     : userFound.password == password
    //     ? res.json({ data: { status: 200, message: "Usuario logeado", rol: userFound.rol } })
    //     : res.status(401).json(false);
    return res.json({data: {status: 200, message:"Ingreso", name: userFound.lastName }})
    } catch {
      return res.json(err);
    }
  },
};
