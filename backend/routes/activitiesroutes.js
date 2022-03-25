const activitiesRouter = require(`express`).Router();

const activitiesControllers = require(`../controllers/activitiescontrollers`);

const {
          getAllActivities,
          getOneActivity,
          uploadActivity,
          deleteActivity,
          modifyActivity,
          getItineraryActivities,
} = activitiesControllers;

itinerariesRouter
          .route(`/activities`)
          .get(getAllActivities)
          .post(uploadActivity);

itinerariesRouter
          .route(`/activities/:id`)
          .delete(deleteActivity)
          .put(modifyActivity)
          .get(getOneActivity);

itinerariesRouter.route(`/itineraryActivities`).get(getItineraryActivities);

module.exports = activitiesRouter;