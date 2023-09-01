const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = require("./user.js");
const Product = require("./product.js");

const Favourite = sequelize.define("Favourite", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

// Favourite.belongsTo(User, { foreignKey: "userId" }); // Relación de Favorito a Usuario
// Favourite.belongsTo(Product, { foreignKey: "productId" }); // Relación de Favorito a Producto

module.exports = Favourite;

// module.exports = (sequelize) => {
//     sequelize.define('favourite', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         }
//     })
// }
