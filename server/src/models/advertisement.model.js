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
        required: false,
        min: 0
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
        required: false,
        enum: ['CDI', 'CDD', 'CTT', 'CUI', 'CAE', 'CIE']
    },
    education: {
        type: Number,
        required: false,
        min: 0,
        max: 8
    },
    remote: {
        type: String,
        required: false,
        enum: ['unremote', 'partially_remote', 'distributed_team', 'full_remote']
    },
    language: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        required: false
    },
    candidacies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidacy"
    }],
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Advertisement', AdvertisementSchema);