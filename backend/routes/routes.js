const Router = require(`express`).Router();
const validator = require('../config/validator')

const ciudadesControllers = require(`../controllers/japancitiescontrollers`);

const {
          consultarCiudades,
          agregarCiudad,
          borrarCiudad,
          modificarCiudad,
          obtenerUnaCiudad,
} = ciudadesControllers;

Router.route(`/alljpcities`).get(consultarCiudades).post(agregarCiudad);

Router.route(`/alljpcities/:id`)
          .delete(borrarCiudad)
          .put(modificarCiudad)
          .get(obtenerUnaCiudad);

module.exports = Router;

const usersControllers = require("../controllers/userControllers");
const { signUpUsers, signInUser, signOutUser } = usersControllers;

Router.route("/auth/signUp").post(validator,signUpUsers);

Router.route("/auth/signIn").post(signInUser);

Router.route("/auth/signOut").post(signOutUser);

module.exports = Router;
