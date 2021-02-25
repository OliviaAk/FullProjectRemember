const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user.model");
const HeroUser = require('../../models/userHero.model')

const loginWithOauth = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.user.email });
		if (!user) {
			return res.status(404).send("User not found");
		}

		const token = jwt.sign({ id: user._id }, process.env.SECRET);

		res.cookie('token',token)
		res.redirect(`http://localhost:3000/facebook-oauth`);
	} catch {
		return res.status(500);
	}
};
const createHero = async (req, res) => {
	try {
		const {
			firstName,
			dateBirth,
			text,
			img
		} = req.body;
		const newHero = new HeroUser({
			firstName,
			dateBirth,
			text,
			img
		});
		const hero = await newHero.save(req.body);
		return res.status(201).json(hero);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const getHeroTape = async(req,res)=>{
	try{
		const heroes = await HeroUser.find()
		res.json(heroes)
	}
	catch(err){
		return res.json(err)
	}
}



const getHeroes = async (req, res) => {
	try {
		const location = await HeroUser.find();
		return res.status(200).json(location);
	} catch (err) {
		return res.status(500).json(err);
	}
};
module.exports = {
	loginWithOauth,
	getHeroes,
	createHero,
	getHeroTape
};
