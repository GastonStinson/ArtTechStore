const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Usuario = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.DATEONLY,
    },
    direction: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

module.exports = Usuario;



// module.exports = (sequelize) => {
//     sequelize.define('user', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         name: {
//             type: DataTypes.STRING
//         },
//         mail: {
//             type: DataTypes.STRING
//         },
//         password: {
//             type: DataTypes.STRING
//         },
//         birthDate: {
//             type: DataTypes.DATEONLY
//         },
//         direction: {
//             type: DataTypes.STRING
//         }
//     }, { timestamps: false })
// }
