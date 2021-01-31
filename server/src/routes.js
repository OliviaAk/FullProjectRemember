const express = require("express");
const heroes = require("./api/heroes");
const history = require("./api/history");
const auth = require("./api/auth");
const add = require("./api/addheroes");
const img = require("./image");

const router = express.Router();

router.use("/heroes", heroes);
router.use("/history", history);
router.use("/auth", auth);
router.use("/add", add);
router.use("/img", img);
module.exports = router;
