const registerDao = require('../models/registerDao');

const insertRegister = async (
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
) => {
  return await registerDao.insertRegister(
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
};

module.exports = { insertRegister };
