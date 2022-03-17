const Router = require(`express`).Router();
const validator = require('../config/validator')
const passport = require('../config/passport')

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
const { signUpUsers, signInUser, signOutUser, verifyEmail, verificarToken } = usersControllers;

Router.route("/auth/signUp").post(validator,signUpUsers);

Router.route("/auth/signIn").post(signInUser);

Router.route("/auth/signOut").post(signOutUser);

Router.route('/verify/:uniqueString').get(verifyEmail) //RECIBE EL LINK DE USUARIO
 //LLAMA A FUNCION DE VERIFICACIION

 Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)

module.exports = Router;
