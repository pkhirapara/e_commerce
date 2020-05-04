require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");
const app = express();
app.use(cors());
mongoose.connect(
  "mongodb://localhost:27017/e_commerce",
  { useNewUrlParser: true },
  function (err) {
    if (err) throw err;
    console.log("connected to db");
  }
);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(routes);

app.listen(process.env.DEV_PORT, (err) => {
  if (err) throw err;
  console.log("Server listening port no " + process.env.DEV_PORT);
});
