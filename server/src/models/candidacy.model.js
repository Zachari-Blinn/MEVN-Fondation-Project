const mongoose = require('mongoose');

const CandidacySchema = new mongoose.Schema({
    status: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    cover_letter_filename: {
        type: String,
        required: false
    },
    cv_filename: {
        type: String,
        required: false
    },
    advertisement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Advertisement"
    },
    people: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "People"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidacy', CandidacySchema);