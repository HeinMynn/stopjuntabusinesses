const express = require("express");
const cdmRoutes = express.Router();
let CDM = require("../models/cdm.model");

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
  const name = req.body.name;
  const imgLink = req.body.imgLink;
  const content = req.body.content;
  const link = req.body.link;

  const newCDMData = {
    name,
    imgLink,
    content,
    link,
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

module.exports = cdmRoutes;
