const { response } = require('express');
const Company = require('../models/company.model');
const People = require('../models/people.model');

// @desc get all company
// @route GET /company
exports.company_get_all = async (req, res) => {
    await Company.find(function (err, result) {
        if (err) res.send(err);

        res.json(result);
    });
}

// @desc Create company
// @route POST /company
exports.company_create_company = async (req, res) => {
    try {
        // Get current user and set for company
        req.body.employee = req.userData.userId;

        await Company.create(req.body).then(company => (
            People.findByIdAndUpdate(req.userData.userId, {
                $push: {
                    companies: company._id
                }
            })
        ));

    } catch (error) {
        console.log(error);
    }
}

// @desc get specified company
// @route GET /company/:id
exports.company_get_company = async (req, res) => {
    await Company.findById(req.params.id)
        .populate('advertisement')
        .exec(function (err, company) {
            if (err) res.send(err);

            res.json(company);
        });
}

// @desc remove specified company
// @route REMOVE /company/:id
exports.company_delete_company = async (req, res) => {
    await Company.deleteOne({ '_id': req.params.id}, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
}

// @desc Change company
// @route PUT /company/:id
exports.company_update_company = async (req, res) => {
    try {
        await Company.findOneAndUpdate({
            _id: req.params.id
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

exports.company_dashboard_company = (req, res) => {
    console.log("test");
    Company.find({employee: req.params.id}).populate({
        path:'advertisements',
        populate: {
            path: 'candidacies',
            populate: {
                path: 'people'
            }
        }
    }).then(response => {
        res.status(200).json(response);
    });
}

exports.company_search_company = async (req, res) => {
    let queryCondition = {};

    if (req.body.name) {
        queryCondition.name = {
            $regex: req.body.name,
            $options: 'i'
        };
    }0

    await Company
        .find(queryCondition)
        .then(response => {
            res.status(200).json(response);
        });
}