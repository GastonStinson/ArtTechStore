const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('valueu', '', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

