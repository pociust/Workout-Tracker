const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoute = require("./routes/html-routes");
const userApiRoute = require("./routes/api-routes");
const db = require("./models");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Store all HTML files in view folder.

app.use(htmlRoute);
app.use(userApiRoute);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
