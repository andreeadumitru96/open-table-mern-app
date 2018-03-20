let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ReservationSchema = new Schema({
    seatsNumber: {
        type: Number,
        required: true
    },
    selectedDate: {
        type: String,
        required: true
    },
    flexibility: {
        type: String,
        required: true
    },
    startingHour: {
        type: String,
        required: true
    },
    processed: [{
        customerId: {
            type: Schema.Types.ObjectId,
            ref: 'Customer'
        },
        locationId: {
            type: Schema.Types.ObjectId,
            ref: 'Location'
        }
    }]
});

module.exports = mongoose.model('Reservation', ReservationSchema);