const mongoose = require("mongoose");

const japancitiesSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});
const japanCities = mongoose.model("japancities", japancitiesSchema);
module.exports = japanCities;
