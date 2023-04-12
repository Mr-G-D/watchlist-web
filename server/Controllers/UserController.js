const User = require("../Models/User");

exports.login = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    await User.create({
      name: name,
      email: email,
    });
    res.json({
      status: 200,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: error,
    });
  }
};
