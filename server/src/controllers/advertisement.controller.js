const Advertisement = require("../models/advertisement.model");

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
        await Advertisement.create(req.body, function (err, result) {
            if (err) res.send(err);

            res.json(result);
        });
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
    await Advertisement.deleteOne(req.params.advertisementId, function (err, result) {
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