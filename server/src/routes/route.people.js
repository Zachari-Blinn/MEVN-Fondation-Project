const express = require('express');
const router = express.Router();

const People = require('../models/model.people');

// @desc Create people
// @route POST /people
router.post('/', async(req, res) => {
    try{        
        await People.create(req.body);
    }catch(error){
        console.log(error);
    }
});

// @desc Change people
// @route PUT /people/:id
router.put('/:id', async(req, res) => {
    try{
        let people = await People.findById(req.params.id).lean();
        
        await People.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true
        });
    }catch(error){
        console.log(error);
    }
});

//
// @desc get all people
router.get('/', async(req,res) => {
    try{
        await People.find();
    }catch(error){
        console.log(error);
    }
})

module.exports = router;