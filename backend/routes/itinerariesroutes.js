<<<<<<< HEAD
const itinerariesRouter = require(`express`).Router();

const itinerariesControllers = require(`../controllers/itinerariescontrollers`);

const { getAllItineraries, getOneItinerary,uploadItinerary,deleteItinerary, modifyItinerary,getCityItineraries} = itinerariesControllers;

itinerariesRouter.route(`/itineraries`).get(getAllItineraries).post(uploadItinerary)

itinerariesRouter.route(`/itineraries/:id`).delete(deleteItinerary).put(modifyItinerary).get(getOneItinerary)

itinerariesRouter.route(`/cityItineraries`).get(getCityItineraries)

=======
const itinerariesRouter = require(`express`).Router();

const itinerariesControllers = require(`../controllers/itinerariescontrollers`);

const { getAllItineraries, getOneItinerary,uploadItinerary,deleteItinerary, modifyItinerary,getCityItineraries} = itinerariesControllers;

itinerariesRouter.route(`/itineraries`).get(getAllItineraries).post(uploadItinerary)

itinerariesRouter.route(`/itineraries/:id`).delete(deleteItinerary).put(modifyItinerary).get(getOneItinerary)

itinerariesRouter.route(`/cityItineraries`).get(getCityItineraries)

>>>>>>> 105cd1da12d49a2b894a7723d921a1d00a2070b1
module.exports = itinerariesRouter;