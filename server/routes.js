const express = require("express");
const { login } = require("./Controllers/UserController");
const { create, getLike, deleteLike } = require("./Controllers/AppController");
const router = express.Router();

router.post("/login", login);

router.post("/watchlist/add", create);
router.get("/watchlist/get", getLike);
router.get("/watchlist/delete", deleteLike);

module.exports = router;
