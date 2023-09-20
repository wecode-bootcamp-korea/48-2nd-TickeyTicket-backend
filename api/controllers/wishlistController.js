const wishlistService = require('../services/wishlistService');
const { catchAsync } = require('../utils/error');

const addWishList = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  const userId = req.user.id;
  const addWishListProduct = await wishlistService.addWishList(
    userId,
    productId
  );
  res.status(201).json({ message: 'Successful Add wish event' });
});

const deleteWishList = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const productId = req.params.productId;
  const deletewishListProduct = await wishlistService.deleteWishList(
    userId,
    productId
  );

  res.status(201).json({ message: 'Successful cancel wish event' });
});

module.exports = {
  addWishList,
  deleteWishList,
};
