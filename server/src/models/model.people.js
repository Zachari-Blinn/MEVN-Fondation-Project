const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    birthday: {
        type: Date,
        required: false
    },
    gender: {
        type: boolean,
        required: false
    },
    cv_filename: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        required: false
    },
    advertisements: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "advertisement"
    }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('People', PeopleSchema);