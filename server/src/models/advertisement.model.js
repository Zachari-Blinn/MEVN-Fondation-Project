const mongoose = require('mongoose');

const AdvertisementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    salary: {
        type: Number,
        required: false
    },
    starting_date: {
        type: Date,
        required: false
    },
    ending_date: {
        type: Date,
        required: false
    },
    contract_type: {
        type: String,
        required: false
    },
    education: {
        type: String,
        required: false
    },
    remote: {
        type: String,
        required: false
    },
    language: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        required: false
    },
    candidacies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "candidacy"
        }
    ],
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Advertisement', AdvertisementSchema);