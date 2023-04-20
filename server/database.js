const { Sequelize } = require("sequelize");

const DB = process.env.DB;

module.exports = new Sequelize(DB, "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: true,
});

// sequelize.authenticate();
