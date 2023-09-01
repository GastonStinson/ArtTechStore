const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const Favourite = require("./favourite.js");
const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      validate: {
        min: 1, //Valor minimo
      },
    },
    published: {
      type: DataTypes.DATEONLY,
    },
    posted: {
      type: DataTypes.BOOLEAN,
    },
    bet: {
      type: DataTypes.BOOLEAN,
    },
    type: {
      type: DataTypes.ENUM("Pintura", "Escultura", "Dibujo"),
    },
    technique: {
      type: DataTypes.ENUM("Oleo", "Lapiz"),
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

// Product.hasMany(Favourite, { foreignKey: "productId" }); // Relación de Producto a Favoritos


module.exports = Product;



// module.exports = (sequelize) => {
//     sequelize.define('product', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         price: {
//             type: DataTypes.FLOAT,
//             validate: {
//                 min: 1 //Valor minimo
//             },
//         },
//         published: {
//             tpye: DataTypes.DATEONLY
//         },
//         posted: {
//             type: DataTypes.BOOLEAN
//         },
//         bet: {
//             type: DataTypes.BOOLEAN
//         },
//         type: {
//             type: DataTypes.ENUM('Pintura', 'Escultura', 'Dibujo')
//         },
//         technique: {
//             type: DataTypes.ENUM('Oleo', 'Lapiz')
//         },
//         description: {
//             type: DataTypes.TEXT
//         },
//         image: {
//             type: DataTypes.TEXT
//         }

//     }, { timestamps: false });
// }
