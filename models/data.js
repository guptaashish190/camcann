const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const data = new Schema({
  data: {
      topleft: {
          y: Number,
          x: Number
      },
      bottomRight: {
          y: Number,
          x: Number,
      },
      confidence: Number,
      label: String,
  },
  time: String,
});

module.exports = mongoose.model("data", data, "data");