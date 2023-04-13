const List = require("../Models/List");

exports.create = async (req, res) => {
  try {
    const res = await List.create({ ...req.body });
    res.json({
      status: 200,
      body: res,
    });
  } catch (error) {
    res.send(error);
  }
};

exports.getLike = async (req, res) => {
  try {
    const { user_id, movie_id, movie } = req.query;
    const data = await List.findOne({
      where: { user_id: user_id, movie_id: movie_id, movie: movie },
    });
    res.json({
      status: 200,
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

exports.deleteLike = async (req, res) => {
  try {
    const { user_id, movie_id, movie } = req.query;
    const data = await List.destroy({
      where: { user_id: user_id, movie_id: movie_id, movie: movie },
    });
    res.json({
      status: 200,
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};
