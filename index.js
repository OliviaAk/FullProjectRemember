require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./src/routes");
const app = express();
const path = require('path')
const { PORT } = process.env;
const url = process.env.DATABASE;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/',router);
app.use(express.static('./client/build/'));
app.get('/*', (req, res) => {
	res.sendFile('index.html', { root: __dirname + '/client/build/' });
  });

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));
app.listen(PORT, () => {
	console.log(`server started on port:${PORT}`);
});

