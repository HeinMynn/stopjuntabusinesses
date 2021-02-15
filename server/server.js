require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "https://010221.org",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
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
const shameRouter = require("./routers/shame");

app.use("/business", businessRouter);
app.use("/cdm", cdmRouter);
app.use("/shame", shameRouter);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
