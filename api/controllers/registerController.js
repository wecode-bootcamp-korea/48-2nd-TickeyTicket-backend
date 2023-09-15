const registerService = require('../services/registerService');
const { catchAsync } = require('../utils/error');

const registerPerformance = catchAsync(async (req, res) => {
  const {
    registrationImageUrl,
    name,
    productDescription,
    importantNotice,
    discountInformation,
    performPlace,
    address,
    region1Depth,
    region2Depth,
    zipCode,
    price,
    sequence,
    startDate,
    startTime,
    runningTime,
    availableTicket,
    thumbnailImageUrl,
    performerName,
    performerDescription,
    actorImageUrl,
    categoryGenresId,
    coordinateX,
    coordinateY,
  } = req.body;
  const userId = req.user.userId;

  const insertId = await registerService.insertRegister(
    userId,
    registrationImageUrl,
    name,
    productDescription,
    importantNotice,
    discountInformation,
    performPlace,
    address,
    region1Depth,
    region2Depth,
    zipCode,
    price,
    sequence,
    startDate,
    startTime,
    runningTime,
    availableTicket,
    thumbnailImageUrl,
    performerName,
    performerDescription,
    actorImageUrl,
    categoryGenresId,
    coordinateX,
    coordinateY
  );

  res.status(200).json({ data: insertId });
});

module.exports = {
  registerPerformance,
};
