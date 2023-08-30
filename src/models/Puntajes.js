const sequelize = require("../config/db.js");

const Sequelize = require("sequelize");
const Usuario = require("./Usuario.js");

const Puntajes = sequelize.define("puntaje", {
  puntajeId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  fecha: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  dailyPoint: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Puntajes.belongsTo(Usuario, {
  foreignKey: "userId",
});

Usuario.hasMany(Puntajes, {
  foreignKey: "userId",
});

module.exports = Puntajes;
