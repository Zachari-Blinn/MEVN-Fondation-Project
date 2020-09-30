const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
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
    advertisements: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "advertisement"
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Company', CompanySchema);