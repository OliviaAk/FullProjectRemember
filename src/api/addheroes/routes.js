const express = require("express");
const { createCard } = require("./controller");

const route = express.Router();

route.post("/", createCard);

module.exports = route;
