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
const {addComment, modifiComment,deleteComment}= commentsControllers
//PLACES ROUTES
itinerariesRouter.route('/itineraries/comment')
.post(passport.authenticate('jwt',{ session: false }),addComment)
.put(passport.authenticate('jwt',{ session: false }),modifiComment)

itinerariesRouter.route('/itineraries/comment/:id')
.post(passport.authenticate('jwt',{ session: false }),deleteComment)




module.exports = itinerariesRouter;
