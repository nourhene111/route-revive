const express = require('express'); 

const equipeRouter = require('./equipe.route');
const equipementRouter = require('./equipement.route');
const vehiculeRouter = require('./vehicule.route');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router); 
  router.use('/equipe', equipeRouter);
  router.use('/equipement', equipementRouter);
  router.use('/vehicule', vehiculeRouter);
}

module.exports = routerApi;