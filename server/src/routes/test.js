const express = require('express');
const router = express.Router();

const Test = require('../models/test');

// @desc Create test
// @route POST /test
router.post('/', async(req, res) => {
    try{        
        await Test.create(req.body, function(err, result) {
            if(err) res.send(err);
        
            res.json(result);
        });
    }catch(error){
        console.log(error);
    }
});

module.exports = router;