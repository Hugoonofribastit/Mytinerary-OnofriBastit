const Activity = require("../models/activities");

const activityController = {
          getAllActivities: async (req, res) => {
                    console.log(req);
                    const data = await Activity.find().populate("itineraryId");
                    res.json({
                              response: data,
                    });
          },
          getItineraryActivities: async (req, res) => {
                    /*   const {cityId} = req.query
        const data= await Itinerary.find().populate("cityId")
        res.json({
            response: data
        }) */
                    try {
                              const activityPerItinerary = await Activity.find({
                                        cityId: req.query.cityId,
                              });
                              res.json({ response: activityPerItinerary });
                    } catch (error) {
                              console.log(error);
                    }
          },
          getOneActivity: async (req, res) => {
                    const id = req.params.id;
                    const data = await Activity.findOne({ _id: id }).populate(
                              "cityId"
                    );
                    res.json({ response: data });
          },
          uploadActivity: (req, res) => {
                    const {
                              image,
                              name,
                              description,
                              itineraryId,
                    } = req.body;
                    new Activity({
                        image,
                        name,
                        description,
                        itineraryId,
                    })
                              .save()
                              .then((respuesta) => res.json({ respuesta }));
          },
          deleteActivity: async (req, res) => {
                    const id = req.params.id;
                    await Activity.findOneAndDelete({ _id: id }).then(
                              (respuesta) => res.json({ respuesta })
                    );
          },
          modifyActivity: async (req, res) => {
                    const id = req.params.id;
                    const itinerary = req.body;

                    await Activity.findOneAndUpdate(
                              { _id: id },
                              itinerary
                    ).then((respuesta) => res.json({ respuesta }));
          },
};
module.exports = activityController;
