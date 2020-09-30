const mongoose = require('mongoose');

const AdvertisementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    description: {
        type: text,
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