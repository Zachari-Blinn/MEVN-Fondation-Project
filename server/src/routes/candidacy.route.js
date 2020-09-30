const express = require('express');
const router = express.Router();

const Candidacy = require('../models/candidacy.model');

// @desc Create candidacy
// @route POST /candidacy
router.post('/', async(req, res) => {
    try{
        //Define data send to create candidacy
        console.log(req.body);

        await Candidacy.create(req.body, function(err, result){
            if(err) res.send(err);
        
            res.json(result);
        });
    }catch(error){
        console.log(error);
    }
});

// @desc Change candidacy
// @route PUT /candidacy/:id
router.put('/:id', async(req, res) => {
    try{        
        await Candidacy.findOneAndUpdate({_id: req.params.id}, req.body, {
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

// @desc get all candidacy
// @route GET /candidacy
router.get('/', async(req, res) => {
    await Candidacy.find(function(err, result){
        if(err) res.send(err);
        
        res.json(result);
    });
});

// @desc get specified candidacy
// @route GET /candidacy/:id
router.get('/:id', async(req, res) => {
    await Candidacy.findById(req.params.id, function (err, result) {
        if(err) res.send(err);
        
        res.json(result);
    })
})

// @desc remove specified candidacy
// @route REMOVE /candidacy/:id
router.delete('/:id', async(req, res) => {
    await Candidacy.deleteOne(req.params.id, function (err, result) {
        if(err) res.send(err);
        
        res.json(result);
    })
})

module.exports = router;