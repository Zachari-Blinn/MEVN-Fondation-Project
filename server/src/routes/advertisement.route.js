const express = require('express');
const router = express.Router();
var cors = require('cors');

const Advertisement = require('../models/advertisement.model');

router.use(cors());

// @desc Create advertisement
// @route POST /advertisement
router.post('/', async (req, res) => {
    try {
        await Advertisement.create(req.body, function (err, result) {
            if (err) res.send(err);

            res.json(result);
        });
    } catch (error) {
        console.log(error);
    }
});

// @desc Change advertisement
// @route PUT /advertisement/:id
router.put('/:id', async (req, res) => {
    try {
        await Advertisement.findOneAndUpdate({
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

// @desc get all advertisement
// @route GET /advertisement
router.get('/', async (req, res) => {
    await Advertisement.find(function (err, result) {
        if (err) res.send(err);

        res.json(result);
    });
});

// @desc get specified advertisement
// @route GET /advertisement/:id
router.get('/:id', async (req, res) => {
    await Advertisement.findById(req.params.id, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
})

// @desc remove specified advertisement
// @route REMOVE /advertisement/:id
router.delete('/:id', async (req, res) => {
    await Advertisement.deleteOne(req.params.id, function (err, result) {
        if (err) res.send(err);

        res.json(result);
    })
})

module.exports = router;