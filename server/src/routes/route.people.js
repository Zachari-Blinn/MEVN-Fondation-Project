const express = require('express');
const router = express.Router();

const People = require('../models/model.people');

// @desc Create people
// @route POST /people
router.post('/', async(req, res) => {
    try{
        //Define data send to create people
        console.log(req.body);

        await People.create(req.body, function(err, result){
            if(err) res.send(err);
        
            res.json(result);
        });
    }catch(error){
        console.log(error);
    }
});

// @desc Change people
// @route PUT /people/:id
router.put('/:id', async(req, res) => {
    try{        
        await People.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true
        }, function(err, result){
            if(err) res.send(err);
        
            res.json(result);
        });
    }catch(error){
        console.log(error);
    }
});

//
// @desc get all people
router.get('/', async(req,res) => {
    People.find(function(err, result){
        if(err) res.send(err);
        
        res.json(result);
    });

})

module.exports = router;