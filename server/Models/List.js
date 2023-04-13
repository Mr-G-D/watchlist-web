const { DataTypes } = require("sequelize");
const db = require("../database");

const List = db.define("List", {
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
    allowNull: false,
  },
  movie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  movie: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

exports = module.exports = List;
