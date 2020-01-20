const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoute = require("./routes/html-routes");
const userApiRoute = require("./routes/api-routes");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.static(__dirname + "/public"));
//Store all HTML files in view folder.

app.use(htmlRoute);
app.use(userApiRoute);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
