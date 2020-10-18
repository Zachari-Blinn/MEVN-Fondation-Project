const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
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
        type: Boolean,
        required: false,
        default: null
    },
    cv_filename: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        required: false
    },
    isActive: {
        type: Boolean,
        required: false,
        default: true
    },
    candidacies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidacy"
    }],
    companies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('People', PeopleSchema);