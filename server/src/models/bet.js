const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');



const Bet = sequelize.define("bet",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = Bet



// module.exports = (sequelize) => {
//     sequelize.define('bet', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     })
// } 