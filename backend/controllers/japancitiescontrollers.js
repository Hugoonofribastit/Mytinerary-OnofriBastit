const Ciudades = require("../models/japancities");

const citiesControllers = {
  consultarCiudades: async (req, res) => {
    let ciudades;
    let error = null;
    try {
      ciudades = await Ciudades.find();
    } catch (err) {
      error = err;
      console.log(err);
    }
    res.json({
      response: error ? "ERROR" : { ciudades },
      success: error ? false : true,
      error: error,
    });
  },
};
module.exports = citiesControllers;
