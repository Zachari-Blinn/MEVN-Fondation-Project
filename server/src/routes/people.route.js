const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const checkAuth = require('../middleware/check-auth');

const People = require('../models/people.model');

router.use(cors());

// @desc Create people
// @route POST /people
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    // if auth is null
    if (!email || !password) {
        return res.status(400).json({
            error: "Email and password are required"
        });
    }

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
});

router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    // if auth is null
    if (!email || !password) {
        return res.status(400).json({
            error: "Email and password are required"
        });
    }

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
})

// @desc Change people
// @route PUT /people/:id
router.put('/:id', async (req, res) => {
    try {
        await People.findOneAndUpdate({
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

// TEST FOR CHECK AUTH
// @desc get all people
// @route GET /people
router.get('/', checkAuth, async (req, res) => {
    await People.find(function (err, result) {
        if (err) res.send(err);

        console.log(req.userData);

        res.json(result);
    });
});

// @desc get specified people
// @route GET /people/:id
router.get('/:id', async (req, res) => {
    await People.findById(req.params.id, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
})

// @desc remove specified people
// @route REMOVE /people/:id
router.delete('/:id', async (req, res) => {
    await People.deleteOne(req.params.id, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
})

router.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);

    res.status(204);
})

module.exports = router;