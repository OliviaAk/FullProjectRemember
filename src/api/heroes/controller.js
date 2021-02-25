const fs = require("fs");
const path = require("path");
const multer = require("multer");
const Hero = require("../../models/hero.model");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads");
	},
	filename: (req, file, cb) => {
		cb(null, `${file.fieldname}-${Date.now()}`);
	},
});

const upload = multer({ storage });

const getHero = async (req, res) => {
	try {
		const { id } = req.query;
		if (id) {
			const hero = await Hero.find({ _id: id });
			return res.status(200).send(hero);
		}
	} catch (error) {
		return res.status(500).json(error);
	}
};

const getHeroByName = async (req, res) => {
	try {
		const { lastName } = req.query;
		if (lastName) {
			const hero = await Hero.find({ firstName: lastName });
			return res.status(200).send(hero);
		}
	} catch (error) {
		return res.status(500).json(error);
	}
};

const getHeroes = async (req, res) => {
	try {
		const location = await Hero.find();
		return res.status(200).json(location);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const updateEvent = async (req, res) => {
	const { id } = req.params;
	const { isFavorite } = req.body;
	try {
		const updatedEvent = await Event.updateOne(
			{ eventId: id },
			{ $set: { isFavorite } },
		);
		if (updatedEvent.ok) {
			res.status(200).json({ eventId: id, isFavorite });
		}
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

const createHero = async (req, res) => {
	try {
		const {
			firstName,
			secondName,
			thirdName,
			dateBirth,
			text,
			fullTextOne,
			fullTextTwo,
			fullTextTree,
		} = req.body;
		const newHero = new Hero({
			firstName,
			secondName,
			thirdName,
			dateBirth,
			fullTextOne,
			fullTextTwo,
			fullTextTree,
			text,
		});
		const hero = await newHero.save(req.body);
		return res.status(201).json(hero);
	} catch (error) {
		return res.status(500).json(error);
	}
};
module.exports = {
	getHeroes,
	createHero,
	getHero,
	updateEvent,
	getHeroByName,
};
