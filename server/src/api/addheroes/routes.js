const express = require("express");
const multer = require("multer");
const { getNewHero, createCard, uploadCard } = require("./controller");

const route = express.Router();

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, "uploads");
	},
	filename(req, file, cb) {
		cb(null, file.originalname);
	},
});
const uploads = multer({ storage });

route.get("/", getNewHero);
route.get("/photo", createCard);

route.post("/photo", uploads.single("image"), uploadCard);

module.exports = route;
