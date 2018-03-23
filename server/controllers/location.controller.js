var Location = require('../models/location.model.js');

exports.createSingleLocation = function(req, res) {

    // Create and Save a new Location
    if(!req.body) {
        return res.status(400).send({message: req.body});
    }
    console.log(req.body);
    let location = new Location(req.body);

    location.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the location"});
        } else {
            res.send(data);
        }
    });
};

exports.findAllLocations = function(req, res) {
    // Retrieve and return all Locations from the database.
    Location.find(function(err, locations){
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving locations."});
        } else {
            res.send(locations);
        }
    });
};