const mongoose = require("mongoose");


const itinerariesSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: String, required: true },
    duration: { type: String, required: true },
    hashtag: [{ type: String, required: true }],
    cityId: {type: mongoose.Schema.Types.ObjectId, ref: 'japancities'} 
  });
  const itineraries = mongoose.model("itinerarios", itinerariesSchema);
  module.exports = itineraries;