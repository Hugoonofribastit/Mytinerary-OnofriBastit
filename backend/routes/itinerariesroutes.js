const itinerariesRouter = require(`express`).Router();

const itinerariesControllers = require(`../controllers/itinerariescontrollers`);
const passport = require('../config/passport')


const {
          getAllItineraries,
          getOneItinerary,
          uploadItinerary,
          deleteItinerary,
          modifyItinerary,
          getCityItineraries,
          likeDislike
          
} = itinerariesControllers;




itinerariesRouter.route("/like/:id").put(passport.authenticate("jwt", {session: false}),likeDislike)

itinerariesRouter
          .route(`/itineraries`)
          .get(getAllItineraries)
          .post(uploadItinerary);

itinerariesRouter
          .route(`/itineraries/:id`)
          .delete(deleteItinerary)
          .put(modifyItinerary)
          .get(getOneItinerary);

itinerariesRouter.route(`/cityItineraries`).get(getCityItineraries);


//COMMENTS REQUIRES
const commentsControllers = require('../controllers/commentsControllers');
const {addComment, modifyComment,deleteComment}= commentsControllers
//PLACES ROUTES
itinerariesRouter.route('/itineraries/comment')

/* .put(passport.authenticate('jwt',{ session: false }),modifyComment) */

itinerariesRouter.route('/itineraries/comment/:id')
/* .delete(passport.authenticate('jwt',{ session: false }),deleteComment) */
.put(passport.authenticate('jwt',{ session: false }),modifyComment)
.post(passport.authenticate('jwt',{ session: false }),addComment)

itinerariesRouter.route('/itineraries/comment/:id/:comment')
.delete(passport.authenticate('jwt',{ session: false }),deleteComment)





module.exports = itinerariesRouter;
