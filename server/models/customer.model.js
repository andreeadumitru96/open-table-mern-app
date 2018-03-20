let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    reservations : [{
        type: Schema.Types.ObjectId,
        ref: 'Reservation'
    }],
    addedRatings: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    addedReviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

module.exports = mongoose.model('Customer', CustomerSchema);