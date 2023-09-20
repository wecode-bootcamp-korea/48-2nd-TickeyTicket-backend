const mainService = require('../services/mainService');
const { catchAsync } = require('../utils/error');

const getProductList = catchAsync(async (req, res) => {
  const userId = req.user ? req.user.id : null;
  const { lng, lat, genreId, hashtagId, dateBy, sortBy } = req.query;

  const showproductlist = await mainService.getProductByCategory(
    userId,
    lng,
    lat,
    genreId,
    hashtagId,
    dateBy,
    sortBy
  );

  showproductlist.forEach((item) => {
    item.latlng = JSON.parse(item.latlng);
  });

  res.status(201).json({
    data: showproductlist,
  });
});

const getAllProdctList = catchAsync(async (req, res) => {
  const showAllProdcut = await mainService.getAllProdctList();

  showAllProdcut.forEach((item) => {
    item.latlng = JSON.parse(item.latlng);
  });

  res.status(201).json(showAllProdcut);
});

module.exports = {
  getProductList,
  getAllProdctList,
};
