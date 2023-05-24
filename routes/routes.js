const express = require('express');
const Model = require('../models/model.js')
const router = express.Router();

module.exports = router;

//Create routes for desired actions, endpoints

//POST METHOD 
//the data body to post using the model
router.post('/post', (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }
})

//GET ALL METHOD
router.get('/getAll',  (req, res) => {
res.send('Get All API')
})

//GET BY ID METHOD
//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})
//UPDATE BY ID METHOD 
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})
//DELETE BY ID METHOD 
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})