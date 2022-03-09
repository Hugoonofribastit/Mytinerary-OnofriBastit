<<<<<<< HEAD
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



=======
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



>>>>>>> 105cd1da12d49a2b894a7723d921a1d00a2070b1
