const express = require('express');
const router = express.Router();

const Test = require('../models/test');

// @desc Create test
// @route POST /test
router.post('/', async(req) => {
    try{        
        await Test.create(req.body);
    }catch(error){
        console.log(error);
    }
});

module.exports = router;