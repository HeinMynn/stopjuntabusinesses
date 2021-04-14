const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Newsletter = new Schema({
  title: {
    type: String,
  },
  number: {
    type: String,
  },
  imgURL: {
    type: String,
  },
  link: {
    type: String,
  },
});
module.exports = mongoose.model("Newsletter", Newsletter);
