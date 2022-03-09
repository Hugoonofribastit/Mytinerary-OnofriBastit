<<<<<<< HEAD
const Itinerary = require("../models/itineraries")

const itineraryController ={
    getAllItineraries: async (req,res)=>{
        console.log(req)
        const data= await Itinerary.find().populate("cityId")
        res.json({
            response: data
        })


    },
    getCityItineraries: async (req,res)=>{
      /*   const {cityId} = req.query
        const data= await Itinerary.find().populate("cityId")
        res.json({
            response: data
        }) */
        try{
            const itineraryPerCity = await Itinerary.find({cityId:req.query.cityId})
            res.json({response:itineraryPerCity})
            
        }catch(error){
            console.log(error)
        }


    },
    getOneItinerary: async(req,res)=>{
        const id = req.params.id;
        const data= await Itinerary.findOne({ _id: id }).populate("cityId")
        res.json({response:data})
    },
    uploadItinerary: (req,res)=>{
        const {image,name,username,details,price,hashtag,duration,cityId} = req.body
        new Itinerary({image,name,username,details,price,hashtag,duration,cityId}).save()
        .then((respuesta) => res.json({respuesta}))

         
    },
    deleteItinerary: async(req,res)=>{
        const id = req.params.id;
    await Itinerary.findOneAndDelete({ _id: id })
    .then((respuesta) =>res.json({respuesta}) )


    },
    modifyItinerary: async(req,res)=>{
        const id = req.params.id;
        const itinerary = req.body;

    await Itinerary.findOneAndUpdate({ _id: id }, itinerary)
    .then((respuesta) =>res.json({respuesta}) )
    }


}
=======
const Itinerary = require("../models/itineraries")

const itineraryController ={
    getAllItineraries: async (req,res)=>{
        console.log(req)
        const data= await Itinerary.find().populate("cityId")
        res.json({
            response: data
        })


    },
    getCityItineraries: async (req,res)=>{
      /*   const {cityId} = req.query
        const data= await Itinerary.find().populate("cityId")
        res.json({
            response: data
        }) */
        try{
            const itineraryPerCity = await Itinerary.find({cityId:req.query.cityId})
            res.json({response:itineraryPerCity})
            
        }catch(error){
            console.log(error)
        }


    },
    getOneItinerary: async(req,res)=>{
        const id = req.params.id;
        const data= await Itinerary.findOne({ _id: id }).populate("cityId")
        res.json({response:data})
    },
    uploadItinerary: (req,res)=>{
        const {image,name,username,details,price,hashtag,duration,cityId} = req.body
        new Itinerary({image,name,username,details,price,hashtag,duration,cityId}).save()
        .then((respuesta) => res.json({respuesta}))

         
    },
    deleteItinerary: async(req,res)=>{
        const id = req.params.id;
    await Itinerary.findOneAndDelete({ _id: id })
    .then((respuesta) =>res.json({respuesta}) )


    },
    modifyItinerary: async(req,res)=>{
        const id = req.params.id;
        const itinerary = req.body;

    await Itinerary.findOneAndUpdate({ _id: id }, itinerary)
    .then((respuesta) =>res.json({respuesta}) )
    }


}
>>>>>>> 105cd1da12d49a2b894a7723d921a1d00a2070b1
module.exports = itineraryController