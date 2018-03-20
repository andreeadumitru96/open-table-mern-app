let mongoose = require('mongoose');

var Schema = mongoose.Schema;

let LocationSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    locationName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: [{
        type: Number,
        required: true
    }],
    images: [String],

    coordinates: {
        longitude: Number,
        latitude: Number
    },
    capacity: {
        type: Number,
        required: true
    },
    liveSeatsAvailable: Number,

    customWeeklyProgram: [{
        weekDay: {   
            startHour: String,
            endHour: String  
                  
        }
    }],
    defaultWeeklyProgram: [{
        weekDay: { 
            startHour: {
                type: String,
                required: true
            },
            endHour: {
                type: String,
                required: true
            }  
        }
    }],
    receivedReviews: [{
        customerId: {
            type: Schema.Types.ObjectId,
             ref: 'Customer'
        },
        reviewId: {
            type: Schema.Types.ObjectId,
             ref: 'Review'
        }
    }],
    receivedRatings: [{
        customerId: {
            type: Schema.Types.ObjectId,
             ref: 'Customer'
        },
        reviewId: {
            type: Schema.Types.ObjectId,
             ref: 'Review'
        }
    }],
    menu: [{
         categoryName: {
             type: String,
             required: true
         },
        categoryItems: [{
            name: String,
            price : Number,
            unit: String,
            unitValue: Number
        }]
    }],
    filter: [String],

    customers: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }]
});

module.exports = mongoose.model('Location', LocationSchema);