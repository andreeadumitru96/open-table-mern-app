var Location = require('../models/location.model.js');
var passwordHash = require('password-hash');

exports.registerLocation = function(req, res) {
    if(!req.body) {
        return res.status(400).send({message: req.body});
    }

    let proccessedLocation = req.body;
    proccessedLocation.password = passwordHash.generate(proccessedLocation.password);

    let location = new Location(proccessedLocation);

    Location.findOne({email: req.body.email}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Some error occurred while trying to register."});
        } else if(data ===  null) {
            location.save();
            res.status(200).send(location);
        } else {
            res.status(422).send({message: "E-mail address already exists. Please choose another one."});
        }
    });
};

// exports.findAllLocations = function(req, res) {
    // Retrieve and return all Locations from the database.
//     Location.find(function(err, locations){
//         if(err) {
//             console.log(err);
//             res.status(500).send({message: "Some error occurred while retrieving locations."});
//         } else {
//             res.send(locations);
//         }
//     });
// };