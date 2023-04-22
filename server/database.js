const { Sequelize } = require("sequelize");

const DB = process.env.DB;
const USERNAME = process.env.DB_USERNAME;
const HOST_NAME = process.env.DB_HOST_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = new Sequelize(DB, USERNAME, DB_PASSWORD, {
  host: HOST_NAME,
  dialect: "mysql",
});

// sequelize.authenticate();
