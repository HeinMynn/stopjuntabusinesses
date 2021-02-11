const express = require("express");
const businessRoutes = express.Router();
let Business = require("../models/businesses.model");

businessRoutes.route("/test").get(function (req, res) {
  res.send("Hello from Express!");
});

businessRoutes.route("/").get(function (req, res) {
  Business.find(function (err, business) {
    if (err) {
      console.log(err);
    } else {
      res.json(business);
    }
  });
});

businessRoutes.route("/add").post((req, res) => {
  const product = req.body.product;
  const industry = req.body.industry;
  const popularity = req.body.popularity;

  const newBusinessData = {
    product,
    industry,
    popularity,
  };

  const newBusiness = new Business(newBusinessData);
  newBusiness
    .save()
    .then((business) => {
      res.status(200).json({ business: "Business added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new business failed");
    });
});

businessRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business) {
    res.json(business);
  });
});

module.exports = businessRoutes;
