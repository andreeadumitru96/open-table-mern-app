var Customer = require('../models/customer.model.js');

exports.createSingleCustomer = function(req, res) {
    // Create and Save a new Customer
    if(!req.body) {
        return res.status(400).send({message: req.body});
    }
    console.log(req.body);
    let customer = new Customer(req.body);

    customer.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the customer"});
        } else {
            res.send(data);
        }
    });
};
