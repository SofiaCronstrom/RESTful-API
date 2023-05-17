const express = require('express');

const router = express.Router();

module.exports = router;

//Create routes for desired actions, endpoints

//POST METHOD 
router.post('/post', (req, res) => {
    res.send('Post API')
})

//GET ALL METHOD
router.get('/getAll',  (req, res) => {
res.send('Get All API')
})

//GET BY ID METHOD
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})
//UPDATE BY ID METHOD 
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})
//DELETE BY ID METHOD 
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})