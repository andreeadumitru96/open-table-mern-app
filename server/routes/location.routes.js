var locationController = require('../controllers/location.controller.js');

module.exports = function(app) {

    app.post('/api/register/location', locationController.registerLocation);

    // app.post('/api/login/location', locationController.loginLocation);

    // Create multiple Location  at once
    // app.post('/multiple-locations', locationController.createLocations);

    // Retrieve all Locations 
    // app.get('/api/location', locationController.findAllLocation);

    // Retrieve a single Location by id
    // app.get('/location/:locationId', test.findOneLocationById);

    // Update a Location by id
    // app.put('/location/:locationId', test.updateOneLocationById;

    // Delete a Location by id
    // app.delete('/location/:locationId', test.deleteOneLocationById);
};
