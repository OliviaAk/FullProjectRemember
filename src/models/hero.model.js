const mongoose = require("mongoose");

const { Schema } = mongoose;
const heroSchema = new Schema({
	dateBirth: { type: String },
	firstName: { type: String, uppercase: false, lowercase: false },
	secondName: { type: String },
	thirdName: { type: String },
	text: { type: String },
	img: { data: Buffer, contentType: String },
	fullTextOne: { type: String },
	fullTextTwo: { type: String },
	fullTextTree: { type: String },
});

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;
