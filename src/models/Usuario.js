const Sequelize = require("sequelize");
const sequelize = require("../config/db.js");

const Usuario = sequelize.define("usuario", {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  puntaje: {
    type: Sequelize.INTEGER,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Usuario;
