const express = require('express');
const router = express.Router(); 
const vehiculeController = require('../controllers/vehicule.controller');

router
    .get('/', vehiculeController.get )
    .get('/:id', vehiculeController.getById )
    .get('/getPending', vehiculeController.getPending )
    .post('/create', vehiculeController.create )
    .put('/:id', vehiculeController.update )
    .delete('/:id', vehiculeController._delete );

module.exports = router;
