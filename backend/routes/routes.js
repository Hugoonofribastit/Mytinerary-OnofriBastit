const Router = require(`express`).Router();

const ciudadesControllers = require(`../controllers/japancitiescontrollers`);

const { consultarCiudades, agregarCiudad, borrarCiudad,modificarCiudad} = ciudadesControllers;

Router.route(`/alljpcities`).get(consultarCiudades).post(agregarCiudad);

Router.route(`/alljpcities/id:`).delete(borrarCiudad).put(modificarCiudad)


module.exports = Router;
