const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let CDM = new Schema({
  name: {
    type: String,
  },
  imgLink: {
    type: String,
  },
  content: {
    type: String,
  },
  link: {
    type: String,
  },
  city: {
    type: String,
  },
  region: {
    type: String,
  },
});
module.exports = mongoose.model("CDM", CDM);
