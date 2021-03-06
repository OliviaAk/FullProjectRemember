const express = require("express");
const heroes = require("./api/heroes");
const history = require("./api/history");
const add = require("./api/addheroes");

const router = express.Router();

router.use("/heroes", heroes);
router.use("/history", history);
router.use("/add", add);
module.exports = router;
