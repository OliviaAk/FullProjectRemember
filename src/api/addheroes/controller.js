const HeroUser = require("../../models/userHero.model");

const createCard = async (req, res) => {
	try {
		const { firstName, dateBirth, text, img } = req.body;
		const newEvent = new HeroUser({
			isShow: false,
			firstName,
			dateBirth,
			text, 
			img,
		});
		const hero = await newEvent.save();
		return res.status(201).json(hero);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const getCardsUser = async (req,res) => {
	try {
		const h = await HeroUser.find()
		return res.status(200).json(h);
	} catch (err) {
		return res.status(500).send(err);
	}
}
const deleteCards = async (req,res) => {
	try {
		const eventId = req.params.id;
		if (eventId){
			await HeroUser.deleteOne(
				{ _id: eventId },
			);
			return res.status(200).send(eventId)
		}
		res.status(404);
	} catch (err) {
		return res.status(500).send(err);
	}
}
const publishHero = async (req, res) => {
	
	try {
		const eventId = req.params.id;
		const { isShow } = req.body;
		if (eventId) {
			const updatedEvent = await HeroUser.updateOne(
				{ _id: eventId },
				{ $set: { isShow } },
			);
			if (updatedEvent) {
				const event = await HeroUser.findById({ _id: eventId });
				return res.status(200).json(event);
			}
		}
		res.sendStatus(404); 
	} catch (err) {
		res.status(500).json(err);
	}
};
module.exports = {
	createCard,
	getCardsUser,
	publishHero,
	deleteCards,
};
