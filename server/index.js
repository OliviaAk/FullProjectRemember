require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const DIR = './public/uploads';
const router = require("./src/routes");
const app = express();

const { PORT } = process.env;
const url = process.env.DATABASE;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(express.static("public"));
app.set("view engine", "ejs");
require("./src/middleware/index");

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
