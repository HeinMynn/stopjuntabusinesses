require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

var whitelist = ["https://010221.org", "http://localhost:3000"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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
const userRouter = require("./routers/users");
const cityRouter = require("./routers/city");

app.use("/business", businessRouter);
app.use("/cdm", cdmRouter);
app.use("/shame", shameRouter);
app.use("/user", userRouter);
app.use("/city", cityRouter);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
