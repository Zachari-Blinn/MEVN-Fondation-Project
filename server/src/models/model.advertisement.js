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
    peoples: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "people"
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Advertisement', AdvertisementSchema);