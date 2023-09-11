const productService = require('../services/productService');
const { catchAsync } = require('../utils/error');

const getProductDetailById = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  const result = await productService.getProductDetailById(productId);

  res.status(200).json({ data: result });
});

module.exports = { getProductDetailById };
