const Ciudades = require("../models/japancities");

const citiesControllers = {
  consultarCiudades: async (req, res) => {
    let ciudades;
    let error = null;
    try {
      ciudades = await Ciudades.find()
      
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
  obtenerUnaCiudad: async(req,res)=>{
    let ciudades
    let error = null
    const id = req.params.id        
    try{
      ciudades = await Ciudades.findOne({_id:id},ciudades)
      
      console.log(ciudades)
    }catch(error){
        console.log(error)
    }
    res.json({
      respuesta: error ? 'ERROR': ciudades,
      success:error ? false: true,
      error: error,
  })

},

  agregarCiudad: async (required, response) => {
    console.log(required.body);
    const { name, image, details, username, hashtag, price, duration } = required.body
    new Ciudades({
      name, image, details, username, hashtag, price, duration 
    }).save()
        .then((respuesta) => response.json({ respuesta }))
        .catch(error => response.json({ error }))
},

borrarCiudad: async (required, response) => {
    const id = required.params.id

    let ciudadEliminada

    ciudadEliminada = await Ciudades.findOneAndDelete({ _id: id })
        .then((res) => response.json({ paso: "listo", respuesta: res }))
        .catch(error => response.json({ error }))
},

modificarCiudad: async (req, res) => {
    const id = req.params.id
    const ciudad = req.body

    let ciudadb
    ciudadb = await Ciudades.findOneAndUpdate({ _id: id }, ciudad, { new: true })
        .then((response) => res.json({ paso: "listo", respuesta: response }))
        .catch(error => res.json({ error }))
}
}





module.exports = citiesControllers;