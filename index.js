require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./src/routes");
const app = express();
const  PORT  = 5000;
const url = 'mongodb+srv://dbOl:1234@clustermemory.wksik.mongodb.net/dbOl';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(router);
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

