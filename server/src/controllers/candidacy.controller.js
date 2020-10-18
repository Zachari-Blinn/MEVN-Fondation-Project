const Candidacy = require('../models/candidacy.model');
const People = require('../models/people.model');
const Advertisement = require('../models/advertisement.model');

// @desc get all candidacy
// @route GET /candidacy
exports.candidacy_get_all = async (req, res) => {
    await Candidacy.find(function (err, result) {
        if (err) res.send(err);

        res.json(result);
    });
}

// @desc Create candidacy
// @route POST /candidacy/:advertisementId
exports.candidacy_create_candidacy = async (req, res) => {
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
    await Candidacy.deleteOne(req.params.candidacyId, function (err, result) {
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