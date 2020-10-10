const express = require('express');
const router = express.Router();
var cors = require('cors');

const Company = require('../models/company.model');
const People = require('../models/people.model');

router.use(cors());

// @desc Create company
// @route POST /company
router.post('/', async (req, res) => {
    try {
        console.log("test");
        await Company.create(req.body, function (err, result) {
            if (err) res.send(err);

            res.json(result);
        });
    } catch (error) {
        console.log(error);
    }
});

// @desc Change company
// @route PUT /company/:id
router.put('/:id', async (req, res) => {
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
});

// @desc get all company
// @route GET /company
router.get('/', async (req, res) => {
    await Company.find(function (err, result) {
        if (err) res.send(err);

        res.json(result);
    });
});

// @desc get specified company
// @route GET /company/:id
router.get('/:id', async (req, res) => {
    await Company.findById(req.params.id, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
})

// @desc remove specified company
// @route REMOVE /company/:id
router.delete('/:id', async (req, res) => {
    await Company.deleteOne(req.params.id, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
})

module.exports = router;