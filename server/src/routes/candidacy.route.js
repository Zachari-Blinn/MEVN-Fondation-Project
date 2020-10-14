const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const {
    upload
} = require('../middleware/upload-file')
const cors = require('cors');

const Candidacy = require('../models/candidacy.model');
const People = require('../models/people.model');
const Advertisement = require('../models/advertisement.model');

router.use(cors());

// @desc Create candidacy
// @route POST /candidacy/:peopleId/:advertisementId
router.post('/', upload.single('cv_filename'), checkAuth, async (req, res) => {
    try {
        req.body.cv_filename = req.file.path;
        req.body.people = req.userData.userId;
        req.body.advertisement = req.params.advertisementId;

        await Candidacy.create(req.body).then(candidacy => (
            People.findByIdAndUpdate(req.userData.userId, {
                $push: {
                    candidacies: candidacy._id
                }
            }).then(response => {
                res.status(200).json(response);
            })
        ));

    } catch (error) {
        console.log(error);
    }
});

// @desc Change candidacy
// @route PUT /candidacy/:id
router.put('/:id', async (req, res) => {
    try {
        await Candidacy.findOneAndUpdate({
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

// @desc get all candidacy
// @route GET /candidacy
router.get('/', async (req, res) => {
    await Candidacy.find(function (err, result) {
        if (err) res.send(err);

        res.json(result);
    });
});

// @desc get specified candidacy
// @route GET /candidacy/:id
router.get('/:id', async (req, res) => {
    await Candidacy.findById(req.params.id, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
})

// @desc remove specified candidacy
// @route REMOVE /candidacy/:id
router.delete('/:id', async (req, res) => {
    await Candidacy.deleteOne(req.params.id, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
})

module.exports = router;