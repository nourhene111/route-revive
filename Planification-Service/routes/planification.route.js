const express = require('express');
const router = express.Router(); 
 
const planificationController = require('../controllers/planification.controller');

router
    .patch('/updatePriority/:id', planificationController.updatePriorite)
     

module.exports = router;