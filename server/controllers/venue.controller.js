const Venue = require("../models/venue.model")

module.exports = {
    getVenues:(req,res) => {
        Venue.find({})
            .then((allVenues) => {
                console.log(allVenues);
            })
            .catch(err => res.status(400).json({message:"Something went wrong with findAll", error: err }),
            );
    },
    createVenue:(req,res) => {
        Venue.create(req.body)
            .then((newVenue) => {
                console.log(newVenue);
                res.json(newVenue);
            })
            .catch((err) => 
                res.status(400).json({message:"Something went wrong with create", error: err }),
            );
    },
    getVenueById:(req,res) => {
        Venue.findOne({_id:req.params.id})
            .then((venue) => {
                console.log(venue);
                res.json(venue);
            })
            .catch((err) => 
                res.status(400).json({message:"Something went wrong with find one", error: err }),
            );
    },
    deleteVenue:(req,res) => {
        Venue.deleteOne({_id:req.params.id})
            .then((venue) => {
                console.log(venue);
                res.json(venue);
            })
            .catch((err) => 
                res.status(400).json({message:"Something went wrong with delete", error: err }),
            );
    },
    updateVenue:(req,res) => {
        Venue.updateOne({_id:req.params.id}, req.body,{new: true, runValidators: true})
            .then((venue) => {
                console.log(venue);
                res.json(venue);
            })
            .catch((err) => 
                res.status(400).json({message:"Something went wrong with update", error: err }),
            );
    },
}