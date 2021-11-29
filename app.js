const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

/* Cors setting for browser chrome */
app.use(cors());

/* config */
dotenv.config();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* Database */
mongoose.connect(process.env.DTB_MONGODB_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Connection database completed");
});
/* use routes */

//Menu routes
//System

/* server running */
app.listen(process.env.PORT, () => {
  console.log("Server running");
});
