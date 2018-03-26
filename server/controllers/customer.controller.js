var Customer = require('../models/customer.model.js');
var passwordHash = require('password-hash');

exports.registerCustomer = function(req, res) {
    if(!req.body) {
        return res.status(400).send({message: req.body});
    }
    let processedCustomer = req.body;
    processedCustomer.password = passwordHash.generate(processedCustomer.password);

    let customer = new Customer(processedCustomer);

    Customer.findOne({email: req.body.email}, function(err, data){
		if(err) {
			console.log(err);
			res.status(500).send({message: "Some error occurred while trying to register."});
		} else if(data === null) {
			customer.save();
			res.status(200).send(customer);
		} else {
			res.status(422).send({message: "E-mail address already exists. Please choose another one."})
		}
	});
};

// exports.loginCustomer = function(req, res) {
//     if(!req.body) {
//         return res.status(400).send({message: req.body});
//     }

//     Customer.findOne({email: req.body.email}, function(err, user) {
//         if(err) {
//             console.log(err);
//             res.status(500).send({message: "Some error occurred while trying to login."});
//         } else if(user !== null && passwordHash.verify(req.body.password, user.password)){
//             res.status(200).send(user);
//         } else {
//             res.status(403).send({message: "Credentials do not match."});
//         }
//     });
// };
