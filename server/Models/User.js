const { DataTypes } = require("sequelize");
const db = require("../database");

const User = db.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

exports = module.exports = User;
