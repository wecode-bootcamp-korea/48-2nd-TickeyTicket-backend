const express = require('express');

const mainController = require('../controllers/mainController');

const mainRouter = express.Router();

mainRouter.get('', mainController.getProductList);
mainRouter.get('/map', mainController.getAllProdctList);

module.exports = {
  mainRouter,
};
