const Candidacy = require('../models/candidacy.model');
const People = require('../models/people.model');
const Advertisement = require('../models/advertisement.model');
var path = require('path');

// @desc get all candidacy
// @route GET /candidacy
exports.candidacy_get_all = async (req, res) => {
    await Candidacy.find(function (err, result) {
        if (err) res.send(err);

        res.json(result);
    }).populate('people').populate('advertisements');
}

// @desc Create candidacy
// @route POST /candidacy/:advertisementId
exports.candidacy_create_candidacy = async (req, res) => {
    try {
        console.log("sqdsqd");
        req.body.cv_filename = req.file.path;
        req.body.people = req.userData.userId;
        req.body.advertisement = req.params.advertisementId;

        console.log("test ads id " + req.params.advertisementId);

        candidacy = await Candidacy.create(req.body);

        await People.findOneAndUpdate({'_id': req.userData.userId}, {
            $push: {
                candidacies: candidacy._id
            }
        })

        await Advertisement.findOneAndUpdate({'_id': req.params.advertisementId}, {
            $push: {
                candidacies: candidacy._id
            }
        }).then(response => {
            console.log(response);
            res.status(200).json(response);
        });
        
    } catch (error) {
        console.log(error);
    }
}

// @desc get specified candidacy
// @route GET /candidacy/:id
exports.candidacy_get_candidacy = async (req, res) => {
    await Candidacy.findById(req.params.candidacyId, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
}

// @desc remove specified candidacy
// @route REMOVE /candidacy/:id
exports.candidacy_delete_candidacy = async (req, res) => {
    await Candidacy.deleteOne({
        '_id': req.params.candidacyId
    }, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
}

// @desc Change candidacy
// @route PUT /candidacy/:id
exports.candidacy_update_candidacy = async (req, res) => {
    try {
        await Candidacy.findOneAndUpdate({
            _id: req.params.candidacyId
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

exports.candidacy_search_candidacy = async (req, res) => {
    let queryCondition = {};

    await Candidacy
        .find(queryCondition).populate('people').populate('advertisement')
        .then(response => {
            res.status(200).json(response);
        });
}

exports.candidacy_download_cv = async (req, res) => {
    await Candidacy.findById(req.params.id).then(candidacy => {
        let fileLocation = path.join(__dirname, '/../../', candidacy.cv_filename)
        
        res.download(fileLocation, (err) => {
            if (err) res.status(400).json(err);
        })
    })



}