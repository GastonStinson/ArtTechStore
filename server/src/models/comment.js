const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");



const Comment = sequelize.define(
  "comment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 100,
      },
    },
  },
  { timestamps: false }
);


module.exports = Comment




// module.exports = (sequelize) => {
//   sequelize.define(
//     "comment",
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       message: {
//         type: DataTypes.TEXT,
//       },
//       rating: {
//         type: DataTypes.INTEGER,
//         validate: {
//           min: 1,
//           max: 100,
//         },
//       },
//     },
//     { timestamps: false }
//   );
// };