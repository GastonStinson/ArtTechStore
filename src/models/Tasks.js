const Sequelize = require("sequelize");
const sequelize = require("../config/db.js");

const Usuario = require("./Usuario.js");

const Tasks = sequelize.define("taks", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descripcion: {
    type: Sequelize.STRING,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  fecha: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  dueDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  prioridad: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Tasks.belongsTo(Usuario, {
  foreignKey: "userId",
});

Usuario.hasMany(Tasks, {
  foreignKey: "userId",
});

module.exports = Tasks;
