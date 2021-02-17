const express = require("express");
const cdmRoutes = express.Router();
let CDM = require("../models/cdm.model");

const validateCDMInput = require("../validation/checkCDM");

cdmRoutes.route("/testcdm").get(function (req, res) {
  res.send("Hello from CDM!");
});

cdmRoutes.route("/").get(function (req, res) {
  CDM.find(function (err, cdm) {
    if (err) {
      console.log(err);
    } else {
      res.json(cdm);
    }
  });
});

cdmRoutes.route("/add").post((req, res) => {
  const { errors, isValid } = validateCDMInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const name = req.body.name;
  const imgLink = req.body.imgLink;
  const content = req.body.content;
  const link = req.body.link;
  const city = req.body.city;
  const region = req.body.region;

  const newCDMData = {
    name,
    imgLink,
    content,
    link,
    city,
    region,
  };

  const newCDM = new CDM(newCDMData);
  newCDM
    .save()
    .then((cdm) => {
      res.status(200).json({ cdm: "CDM info added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new CDM failed");
    });
});

cdmRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  CDM.findById(id, function (err, cdm) {
    res.json(cdm);
  });
});

cdmRoutes.route("/update/:id").post((req, res) => {
  const name = req.body.name;
  const imgLink = req.body.imgLink;
  const content = req.body.content;
  const link = req.body.link;
  const city = req.body.city;
  const region = req.body.region;

  const newCDMData = {
    name,
    imgLink,
    content,
    link,
    city,
    region,
  };

  const newCDM = new CDM(newCDMData);
  newCDM
    .save()
    .then((cdm) => {
      res.status(200).json({ cdm: "CDM info added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new CDM failed");
    });
});

module.exports = cdmRoutes;
