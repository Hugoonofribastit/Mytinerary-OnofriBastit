const Itinerary = require("../models/itineraries");

const itineraryController = {
          getAllItineraries: async (req, res) => {
                    console.log(req);
                    const data = await Itinerary.find().populate("cityId");
                    res.json({
                              response: data,
                    });
          },
          getCityItineraries: async (req, res) => {
                    /*   const {cityId} = req.query
        const data= await Itinerary.find().populate("cityId")
        res.json({
            response: data
        }) */
                    try {
                              const itineraryPerCity = await Itinerary.find({
                                        cityId: req.query.cityId,
                              }).populate("comments.userID");
                              res.json({ response: itineraryPerCity });
                    } catch (error) {
                              console.log(error);
                    }
          },
          getOneItinerary: async (req, res) => {
                    const id = req.params.id;
                    const data = await Itinerary.findOne({ _id: id }).populate(
                              "cityId"
                    );
                    res.json({ response: data });
          },
          uploadItinerary: (req, res) => {
                    const {
                              image,
                              name,
                              username,
                              details,
                              price,
                              hashtag,
                              duration,
                              cityId,
                    } = req.body;
                    new Itinerary({
                              image,
                              name,
                              username,
                              details,
                              price,
                              hashtag,
                              duration,
                              cityId,
                    })
                              .save()
                              .then((respuesta) => res.json({ respuesta }));
          },
          deleteItinerary: async (req, res) => {
                    const id = req.params.id;
                    await Itinerary.findOneAndDelete({ _id: id }).then(
                              (respuesta) => res.json({ respuesta })
                    );
          },
          modifyItinerary: async (req, res) => {
                    const id = req.params.id;
                    const itinerary = req.body;

                    await Itinerary.findOneAndUpdate(
                              { _id: id },
                              itinerary
                    ).then((respuesta) => res.json({ respuesta }));
          },



        /*   likeDislike:async (req,res) =>{
            const id=req.params.id //LLEGA POR PARAMETRO DESDE AXIOS
            const user = req.user.id //LLEGA POR RESPUESTA DE PASSPORT
    
           await  Itinerary.findOne({_id: id})
    
            .then((place) =>{
                console.log(place)
                if(place.likes.includes(user)){
                   Itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:user}},{new:true})//PULL QUITA, SACA
                   .then((response)=> res.json({success:true, response:response.likes}))
                   .catch((error) => console.log(error))
                }else{
                    Itinerary.findOneAndUpdate({_id: id}, {$push:{likes:user}},{new:true})//PUSH AGREGA
                    .then((response) => res.json({success:true, response:response.likes}))
                    .catch((error) => console.log(error))
                }
            })
            .catch((error) => res.json({success:false, response:error}))
        },
     */

        likeDislike:async (req,res) =>{
            const id=req.params.id //LLEGA POR PARAMETRO DESDE AXIOS
            const user = req.user.id //LLEGA POR RESPUESTA DE PASSPORT
          console.log(id);
          console.log(user);
           await Itinerary.findOne({_id: id})
        
            .then((itinerary) =>{
                console.log(itinerary)
                if(itinerary.likes.includes(user)){
                  Itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:user}},{new:true})//PULL QUITA, SACA
                   .then((response)=> res.json({success:true, response:response.likes}))
                   .catch((error) => console.log(error))
                }else{
                   Itinerary.findOneAndUpdate({_id: id}, {$push:{likes:user}},{new:true})//PUSH AGREGA
                    .then((response) => res.json({success:true, response:response.likes}))
                    .catch((error) => console.log(error))
                }
            })
            .catch((error) => res.json({success:false, response:error}))
        },

};
module.exports = itineraryController;
