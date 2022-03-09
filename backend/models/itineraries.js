<<<<<<< HEAD
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
=======
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
>>>>>>> 105cd1da12d49a2b894a7723d921a1d00a2070b1
  module.exports = itineraries;