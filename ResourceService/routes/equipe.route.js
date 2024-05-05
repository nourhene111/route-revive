const express = require('express');
const router = express.Router(); 
const equipeController = require('../controllers/equipe.controller');

router
    .get('/', equipeController.get )
    .get('/:id', equipeController.getById )
    .get('/getPending', equipeController.getPending )
    .post('/create', equipeController.create )
    .put('/:id', equipeController.update )
    .delete('/:id', equipeController._delete );

module.exports = router;
