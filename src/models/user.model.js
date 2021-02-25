const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
	firstName: { type: String },
	lastName: { type: String },
	email: { type: String, required: true, lowercase: true },
	password: { type: String },
	place: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
