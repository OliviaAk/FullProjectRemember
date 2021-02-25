const mongoose = require("mongoose");

const { Schema } = mongoose;
const heroUserSchema = new Schema({
	dateBirth: { type: String },
	firstName: { type: String, uppercase: false, lowercase: false },
	text: { type: String },
	profileImg: {
		type: String,
	},
});

const HeroUser = mongoose.model("HeroUser", heroUserSchema);

module.exports = HeroUser;
