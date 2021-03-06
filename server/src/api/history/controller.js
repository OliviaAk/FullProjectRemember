const History = require("../../models/history.model");

const getDayOfHistory = async (req, res) => {
	try {
		const { id } = req.query;
		if (id) {
			const history = await History.find({ _id: id });
			return res.status(200).send(history);
		}

		const histories = await History.find();
		return res.status(200).send(histories);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const createHistory = async (req, res) => {
	try {
		const { date, text } = req.body;
		const newHistory = new History({ date, text });
		const history = await newHistory.save(req.body);
		return res.status(201).json(history);
	} catch (error) {
		return res.status(500).json(error);
	}
};
module.exports = {
	getDayOfHistory,
	createHistory,
};
