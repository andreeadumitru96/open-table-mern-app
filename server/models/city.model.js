let mongoose = require('mongoose');

var Schema = mongoose.Schema;

let CitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    countries: [{
        countryId: {
            type: Schema.Types.ObjectId,
            ref: 'Country'
        }
    }],
    locations: [{
        type: Schema.Types.ObjectId,
        ref: 'Location'
    }]
});

module.exports = mongoose.model('City', CitySchema);