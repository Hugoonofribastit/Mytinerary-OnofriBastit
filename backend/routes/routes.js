const Router = require(`express`).Router();

const ciudadesControllers = require(`../controllers/japancitiescontrollers`);

const { consultarCiudades} = ciudadesControllers;

Router.route(`/alljpcities`).get(consultarCiudades);




module.exports = Router;
