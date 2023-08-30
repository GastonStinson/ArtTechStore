const Sequelize = require("sequelize");
const sequelize = require("../config/db.js");

const Annotations = sequelize.define("annotations", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  contenido: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  fechaCreacion: {
    type: Sequelize.DATEONLY,
  },
  imagen : {
    type: Sequelize.BLOB("long"),
    allowNull: true,
  }
});
