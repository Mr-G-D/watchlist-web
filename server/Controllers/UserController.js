const User = require("../Models/User");

exports.login = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const [user] = await User.findOrCreate({
      where: { email: email },
      defaults: {
        name: name,
      },
    });
    res.json({
      status: 200,
      id: user.dataValues.id,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: error,
    });
  }
};
