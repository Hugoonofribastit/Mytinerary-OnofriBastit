const mongoose = require("mongoose");

const japancitiesSchema = new mongoose.Schema({
  country: { type: String},
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  itineraryId: [{type: mongoose.Schema.Types.ObjectId, ref: 'itinerarios'}]
  
  
});
const japanCities = mongoose.model("japancities", japancitiesSchema);
module.exports = japanCities;



