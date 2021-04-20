const express = require("express");
const shameRoutes = express.Router();
let Shame = require("../models/shame.model");

shameRoutes.route("/test").get(function (req, res) {
  res.send("Hello from Shaming List!");
});

shameRoutes.route("/").get(function (req, res) {
  Shame.find(function (err, shame) {
    if (err) {
      console.log(err);
    } else {
      res.json(shame);
    }
  });
});

shameRoutes.route("/add").post((req, res) => {
  const name = req.body.name;
  const designation = req.body.designation;
  const profile = req.body.profile;
  const department = req.body.department;
  const related = req.body.related;
  const caseLink = req.body.caseLink;
  const remark = req.body.remark;
  const proof = req.body.proof;
  const proof2 = req.body.proof2;

  const newShamingData = {
    name,
    mmName,
    designation,
    profile,
    department,
    image,
    related,
    caseLink,
    remark,
    proof,
    proof2,
  };

  const newShaming = new Shame(newShamingData);
  newShaming
    .save()
    .then((shame) => {
      res.status(200).json({ shame: "Shaming info added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new Shaming failed");
    });
});
//nothing
shameRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Shame.findById(id, function (err, shame) {
    res.json(shame);
  });
});

module.exports = shameRoutes;
