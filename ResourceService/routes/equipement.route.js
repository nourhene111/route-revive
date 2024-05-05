const express = require('express');
const router = express.Router(); 
const equipementController = require('../controllers/equipement.controller');

router
    .get('/', equipementController.get )
    .get('/:id', equipementController.getById )
    .get('/getPending', equipementController.getPending )
    .post('/create', equipementController.create )
    .put('/:id', equipementController.update )
    .delete('/:id', equipementController._delete );

module.exports = router;
