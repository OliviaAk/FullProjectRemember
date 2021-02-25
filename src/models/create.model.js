const mongoose = require("mongoose");

const { Schema } = mongoose;
const create = new Schema({
	dateBirth: { type: String },
	firstName: { type: String, uppercase: false, lowercase: false },
	text: { type: String },
	profileImg: {
		type: String,
	},
});

const CreateH = mongoose.model("create", create);

module.exports = CreateH;
