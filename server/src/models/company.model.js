const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
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
    logo_name: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    size: {
        type: String,
        required: false,
        enum: [
            "1 à 9", //TPE
            "10 à 49", //PE
            "50 à 249", //ME
            "250 à 4999", //ETI
            "5000 et +" //GE
        ]
    },
    advertisements: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "advertisement"
    }],
    employee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "People"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Company', CompanySchema);