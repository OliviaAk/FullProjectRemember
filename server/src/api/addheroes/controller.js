const CreateH = require("../../models/create.model");

const createCard = async (req, res) => {
	try {
		const { firstName, dateBirth, text, img } = req.body;
		const newHero = new CreateH({
			firstName,
			dateBirth,
			text,
			img,
		});
		const hero = await newHero.save(req.body);
		return res.status(201).json(hero);
	} catch (error) {
		return res.status(500).json(error);
	}
};

module.exports = {
	createCard,
};
