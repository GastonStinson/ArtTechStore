const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Favourite = sequelize.define("Favourite", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})


module.exports = Favourite

// module.exports = (sequelize) => {
//     sequelize.define('favourite', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         }
//     })
// } 
