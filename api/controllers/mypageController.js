const mypageService = require('../services/mypageService');
const { catchAsync } = require('../utils/error');

const getAllBookingList = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const bookingList = await mypageService.getAllBookingList(userId);

  res.status(200).json({ data: bookingList });
});

const deleteBookingTicket = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { paymentCode, productOptionId } = req.body;

  await mypageService.deleteBookingTicket(userId, paymentCode, productOptionId);

  res.status(201).json({ message: 'Successful cancel ticket' });
});

const getMyProfile = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const myProfile = await mypageService.getMyProfile(userId);

  res.status(200).json({ data: myProfile });
});

const updateMyProfile = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { userName, password, phoneNumber, birthdate, gender } = req.body;

  if (!userName || !password) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;

    throw error;
  }

  await mypageService.updateMyProfile({
    userId,
    userName,
    password,
    phoneNumber,
    birthdate,
    gender,
  });

  res.status(200).json({ message: 'userinfo was updated successfully' });
});

const deleteMyProfile = catchAsync(async (req, res) => {
  const userId = req.user.id;

  await mypageService.deleteMyProfile(userId);

  res.status(200).json({ message: 'userinfo was deleted successfully' });
});
module.exports = {
  getAllBookingList,
  deleteBookingTicket,
  getMyProfile,
  updateMyProfile,
  deleteMyProfile,
};
