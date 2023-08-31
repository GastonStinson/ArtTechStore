const { Sequelize } = require("sequelize")


const sequelize = new Sequelize('arttechstore', '', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

