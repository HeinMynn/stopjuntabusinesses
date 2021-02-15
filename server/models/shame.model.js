const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Shame = new Schema({
  name: {
    type: String,
  },
  designation: {
    type: String,
  },
  profile: {
    type: String,
  },
  department: {
    type: String,
  },
  related: {
    type: String,
    default: null,
  },
  caseLink: {
    type: String,
  },
  remark: {
    type: String,
  },
  proof: {
    type: String,
    default: null,
  },
  proof2: {
    type: String,
    default: null,
  },
});
module.exports = mongoose.model("Shame", Shame);