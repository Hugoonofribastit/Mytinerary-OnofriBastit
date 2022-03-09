<<<<<<< HEAD
const Router = require(`express`).Router();

const ciudadesControllers = require(`../controllers/japancitiescontrollers`);

const { consultarCiudades, agregarCiudad, borrarCiudad,modificarCiudad,obtenerUnaCiudad} = ciudadesControllers;

Router.route(`/alljpcities`).get(consultarCiudades).post(agregarCiudad);

Router.route(`/alljpcities/:id`).delete(borrarCiudad).put(modificarCiudad).get(obtenerUnaCiudad)


module.exports = Router;
=======
const Router = require(`express`).Router();

const ciudadesControllers = require(`../controllers/japancitiescontrollers`);

const { consultarCiudades, agregarCiudad, borrarCiudad,modificarCiudad,obtenerUnaCiudad} = ciudadesControllers;

Router.route(`/alljpcities`).get(consultarCiudades).post(agregarCiudad);

Router.route(`/alljpcities/:id`).delete(borrarCiudad).put(modificarCiudad).get(obtenerUnaCiudad)


module.exports = Router;
>>>>>>> 105cd1da12d49a2b894a7723d921a1d00a2070b1
