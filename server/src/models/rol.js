const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("./user.js")

const Rol = sequelize.define("Rol", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


User.belongsTo(Rol, { foreignKey: "roleId" }); // Establecer relación de Usuario a Rol
Rol.hasMany(User, { foreignKey: "roleId" }); // Establecer relación de Rol a Usuarios


module.exports = Rol;

// module.exports = (sequelize) => {
//   sequelize.define("rol", {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
// };
