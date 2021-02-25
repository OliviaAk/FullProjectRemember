const mongoose = require("mongoose");

const { Schema } = mongoose;

const imageSchema = new Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		profileImg: {
			type: String,
		},
	},
	{},
);

module.exports = mongoose.model("Image", imageSchema);
