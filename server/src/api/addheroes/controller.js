const fs = require("fs");
const path = require("path");
const Hero = require("../../models/hero.model");

const getNewHero = async (res, req) => {
	try {
		const hero = await Hero.find();
		return res.send(hero);
	} catch (err) {
		return res.send(err);
	}
};

const createCard = async (req, res) => {
	try {
		const uploadDirectory = path.join("uploads");
		fs.readdir(uploadDirectory, (err, files) => {
			return res.json({ files });
		});
	} catch (error) {
		return res.status(500).json(error);
	}
};
const uploadCard = async (req, res) => {
	const image = req.file.path;

	res.json({ msg: "Successfully" });
};

module.exports = {
	getNewHero,
	createCard,
	uploadCard,
};
