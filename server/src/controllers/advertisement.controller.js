const {
    response
} = require("express");
const Advertisement = require("../models/advertisement.model");
const Company = require('../models/company.model');

// @desc get all advertisement
// @route GET /advertisement
exports.advertisement_get_all = async (req, res) => {
    await Advertisement.find(function (err, result) {
        if (err) res.send(err);

        res.json(result);
    });
}

// @desc Create advertisement
// @route POST /advertisement
exports.advertisement_create_advertisement = async (req, res) => {
    try {
        //req.body.company = "5f8875623ea27c3c85f79b84";
        await Advertisement.create(req.body).then(advertisement => (
            Company.findByIdAndUpdate(advertisement.company._id, {
                $push: {
                    advertisements: advertisement._id
                }
            })
        ));
    } catch (error) {
        console.log(error);
    }
}

// @desc get specified advertisement
// @route GET /advertisement/:id
exports.advertisement_get_advertisement = async (req, res) => {
    await Advertisement.findById(req.params.advertisementId, function (err, result) {
        if (err) res.send(err);

        res.status(200).json(result);
    })
}

// @desc remove specified advertisement
// @route REMOVE /advertisement/:id
exports.advertisement_delete_advertisement = async (req, res) => {
    await Advertisement.deleteOne({ '_id': req.params.advertisementId}, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
}

// @desc Change advertisement
// @route PUT /advertisement/:id
exports.advertisement_update_advertisement = async (req, res) => {
    try {
        await Advertisement.findOneAndUpdate({
            _id: req.params.advertisementId
        }, req.body, {
            new: true,
            runValidators: true
        }, function (err, result) {
            if (err) res.send(err);

            res.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

// @desc get all advertisement by company
// @route GET /advertisement/:companyId
exports.advertisement_get_advertisement_by_company = async (req, res) => {
    await Advertisement.find({
            company: req.params.companyId
        })
        .then(response => {
            res.status(200).json(response);
        })
}

exports.advertisement_search_advertisement = async (req, res) => {
    let queryCondition = {};

    if (req.body.name) {
        queryCondition.name = {
            $regex: req.body.name,
            $options: 'i'
        };
    }

    if (req.body.salary) {
        queryCondition.salary = req.body.salary;
    }

    if (req.body.starting_date) {
        queryCondition.starting_date = req.body.starting_date;
    }

    if (req.body.ending_date) {
        queryCondition.ending_date = req.body.ending_date;
    }

    if (req.body.contract_type) {
        queryCondition.contract_type = req.body.contract_type;
    }

    if (req.body.education) {
        queryCondition.education = req.body.education;
    }

    if (req.body.remote) {
        queryCondition.remote = req.body.remote;
    }

    if (req.body.language) {
        queryCondition.language = req.body.language;
    }

    await Advertisement
        .find(queryCondition)
        .then(response => {
            res.status(200).json(response);
        });
}