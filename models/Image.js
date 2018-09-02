const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const ImageSchema = new Schema({
      TIME: String,
      CAMERA: String,
      CONFIDENCE: Number,
      IMAGELABEL: String,
      IMAGECOORDINATES: {
          x1: Number,
          y1: Number,
          x2: Number,
          y2: Number,
      }
});

module.exports = mongoose.model("Image", ImageSchema, "Image");