require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect(process.env.DB, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
  console.log(
    "MongoDB database connection established successfully in mongoatlas"
  );
});

const businessRouter = require("./routers/businesses");
const cdmRouter = require("./routers/cdm");

app.use("/business", businessRouter);
app.use("/cdm", cdmRouter);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
