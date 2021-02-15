const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let eventSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

let Event = new Schema({
  title: {
    type: String,
  },
  excerpt: {
    type: String,
  },
  date: {
    type: Date,
  },
  detail: {
    events: [eventSchema],
  },
});
module.exports = mongoose.model("Event", Event);
