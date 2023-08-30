// src/controllers/usuarioController.js

const Usuario = require("../models/Usuario.js");
const Puntajes = require("../models/Puntajes.js");

// Obtener todos los usuarios
exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener los usuarios" });
  }
};

exports.obtenerUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    res.json(usuario);
  } catch (error) {
    console.log(error);
  }
};

// Crear un nuevo usuario
exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, email, password, avatar } = req.body;
    const usuario = await Usuario.create({ nombre, email, password,avatar });
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al crear el usuario" });
  }
};

exports.loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("que chucha fue")
    const usuario = await Usuario.findOne({
      where: {
        email: email,
        password: password,
      },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
