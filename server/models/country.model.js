let mongoose = require('mongoose');

var Schema = mongoose.Schema;

let CountrySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Country', CountrySchema);