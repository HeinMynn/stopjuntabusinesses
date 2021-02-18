const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let City = new Schema({
  name: {
    type: String,
  },
  mmName: {
    type: String,
  },
  region: {
    name: {
      type: String,
    },
    mmName: {
      type: String,
    },
  },
});
module.exports = mongoose.model("City", City);
