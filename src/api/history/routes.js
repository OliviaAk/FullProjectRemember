const express = require("express");
const { getDayOfHistory, createHistory } = require("./controller");

const route = express.Router();

route.get("/", getDayOfHistory);
route.post("/", createHistory);

module.exports = route;
