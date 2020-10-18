const People = require('../models/people.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @desc get all people
// @route GET /people
exports.people_get_all = async (req, res) => {
    await People.find(function (err, result) {
        if (err) res.send(err);

        res.json(result);
    });
}

// @desc Create people
// @route POST /people
exports.people_create_people = async (req, res) => {
    try {
        // Check if user already existing
        await People.findOne({
            email: req.body.email
        }, function (err, user) {
            if (err) {
                console.log(err);
            }
            // if user isn't existing crypt password and push to database
            if (!user) {
                bcrypt.hash(req.body.password, 10).then(cryptedPassword => (
                    req.body.password = cryptedPassword,
                    req.body.isAdmin = false,
                    req.body.isActive = true,

                    People.create(req.body, function (err, result) {
                        if (err) res.send(err);
                        res.json(result);
                    })
                ));
            } else {
                return res.status(409).json({
                    error: "User already existing"
                });
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// @desc get specified people
// @route GET /people/:id
exports.people_get_people = async (req, res) => {
    await People.findById(req.params.id, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
}

// @desc remove specified people
// @route REMOVE /people/:id
exports.people_delete_people = async (req, res) => {
    await People.deleteOne({ '_id': req.params.id}, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
}

// @desc Change people
// @route PUT /people/:id
exports.people_update_people = async (req, res) => {
    try {
        await People.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: false,
            runValidators: true
        }, function (err, result) {
            if (err) res.send(err);

            res.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

// @desc Login people
// @route POST /people/login
exports.people_login_people = async (req, res) => {
    await People.findOne({
        email: req.body.email
    }, async function (err, people) {
        if (people == null) {
            return res.status(404).send('Cannot find user');
        }
        try {
            if (await bcrypt.compare(req.body.password, people.password)) {
                const token = jwt.sign({
                        email: people.email,
                        userId: people._id
                    },
                    process.env.ACCESS_TOKEN_SECRET
                );

                res.status(200).send({
                    auth: true,
                    userId: people._id,
                    people: people,
                    message: "Auth successful",
                    token: token,
                });
            } else {
                res.status(404).send({
                    auth: false,
                    message: "Auth failed",
                    token: null
                });
            }
        } catch (error) {
            res.status(500).send('Error on the server');
        }
    })
}

// @desc Logout people
// @route DELETE /people/logout
exports.people_logout_people = async (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);

    res.status(204);
}

exports.people_dashboard_people = (req, res) => {
    People.findById(req.params.id).populate({
        path:'candidacies'
    }).then(response => {
        res.status(200).json(response);
    });
}

exports.people_search_people = async (req, res) => {
    let queryCondition = {};

    if (req.body.firstname) {
        queryCondition.firstname = {
            $regex: req.body.firstname,
            $options: 'i'
        };
    }

    if (req.body.lastname) {
        queryCondition.lastname = {
            $regex: req.body.lastname,
            $options: 'i'
        };
    }

    if (req.body.email) {
        queryCondition.email = {
            $regex: req.body.email,
            $options: 'i'
        };
    }

    await People
        .find(queryCondition)
        .then(response => {
            res.status(200).json(response);
        });
}