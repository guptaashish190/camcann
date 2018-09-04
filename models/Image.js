const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const ImageSchema = new Schema({
      time: String,
      camera: String,
      confidence: Number,
      label: String,
      url: String,
      coordinates: {
          x1: Number,
          x2: Number,
          y1: Number,
          y2: Number,
      }
}); 

module.exports = mongoose.model("Image", ImageSchema, "Image");