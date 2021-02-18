const express = require("express");
const cityRoutes = express.Router();

let City = require("../models/city.model");

cityRoutes.route("/").get(function (req, res) {
  City.find(function (err, city) {
    if (err) {
      console.log(err);
    } else {
      res.json(city);
    }
  });
});

cityRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  City.findById(id, function (err, city) {
    res.json(city);
  });
});

module.exports = cityRoutes;
