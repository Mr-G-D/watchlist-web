const express = require("express");
const { login } = require("./Controllers/UserController");
const {
  create,
  getLike,
  deleteLike,
  getList,
} = require("./Controllers/AppController");
const router = express.Router();

router.post("/login", login);

router.post("/watchlist/add", create);
router.get("/watchlist/get", getLike);
router.get("/watchlist/delete", deleteLike);
router.get("/watchlist/all", getList);

module.exports = router;
