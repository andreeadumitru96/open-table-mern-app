var customerController = require('../controllers/customer.controller.js');

module.exports = function(app) {
    
    //Create a Customer
    app.post('/api/register/customer', customerController.createSingleCustomer);


};
