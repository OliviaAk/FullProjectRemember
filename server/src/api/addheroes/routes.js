const express = require("express");
const { createCard , getCardsUser, publishHero, deleteCards } = require("./controller");

const route = express.Router();

route.post("/", createCard);
route.get("/", getCardsUser);
route.patch("/:id",	publishHero );
route.delete("/:id", deleteCards);

module.exports = route;
