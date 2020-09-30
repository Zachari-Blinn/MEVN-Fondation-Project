const mongoose = require('mongoose');

const CandidacySchema = new mongoose.Schema({
    status: {
        type: String,
        required: false
    },
    cover_letter: {
        type: String,
        required: false
    },
    advertisement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "advertisement"
    },
    people: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "people"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidacy', CandidacySchema);