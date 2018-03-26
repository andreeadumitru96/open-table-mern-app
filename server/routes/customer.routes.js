var customerController = require('../controllers/customer.controller.js');

module.exports = function(app) {

    app.post('/api/register/customer', customerController.registerCustomer);
    // app.post('/api/login/customer', customerController.loginCustomer);
    


};
