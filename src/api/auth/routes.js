const express = require("express");
const passport = require("passport");
const {
	loginWithOauth,
	createHero,
	getHeroes,
	getHeroTape,
} = require("./controller");

const route = express.Router();
/*
route.get(
	"/facebook",
	passport.authenticate("facebook", { scope: "email", session: false }),
);

route.get(
	"/facebook/callback",
	passport.authenticate("facebook", {
		session: false,
	}),
	loginWithOauth,
); */
route.post("/heroAdd", createHero);
route.get("/heroAdd", getHeroes);
route.get("/userHero", getHeroTape);

module.exports = route;
