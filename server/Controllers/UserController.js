const List = require("../Models/List");
const User = require("../Models/User");

exports.login = async (req, res) => {
  try {
    const { name, email } = req.body;
    const [user] = await User.findOrCreate({
      where: { email: email },
      defaults: {
        name: name,
      },
    });
    const data = await List.findAndCountAll({
      where: {
        user_id: user.dataValues.id,
      },
      attributes: ["movie_id", "movie"],
    });
    res.json({
      status: 200,
      id: user.dataValues.id,
      list: data.rows,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: error,
    });
  }
};
