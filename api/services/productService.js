const productDao = require('../models/productDao');

const getProductDetailById = async (productId) => {
  return await productDao.getProductDetailById(productId);
};

module.exports = { getProductDetailById };
