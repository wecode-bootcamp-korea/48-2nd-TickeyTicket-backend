const express = require('express');
const productRouter = express.Router();

const productController = require('../controllers/productController');

productRouter.get(
  '/productdetails/:productId',
  productController.getProductDetailById
);

module.exports = { productRouter };
