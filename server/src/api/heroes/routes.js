const express = require("express");
const {
	getHeroes,
	createHero,
	getHero,
	getHeroByName,
} = require("./controller");

const route = express.Router();

route.get("/", getHeroes);
route.post("/", createHero);
route.get("/hero", getHero);
route.get("/search", getHeroByName);
module.exports = route;
