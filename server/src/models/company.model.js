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
            "TPE", //TPE
            "PE", //PE
            "ME", //ME
            "ETI", //ETI
            "GE" //GE
        ]
    },
    advertisements: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Advertisement"
    }],
    employee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "People"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Company', CompanySchema);