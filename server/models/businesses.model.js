const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Business = new Schema({
  product: {
    type: String,
  },
  industry: {
    type: String,
  },
  popularity: {
    type: Number,
  },
});
module.exports = mongoose.model("business", Business);
