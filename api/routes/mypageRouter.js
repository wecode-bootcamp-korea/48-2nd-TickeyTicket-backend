const express = require('express');

const mypageController = require('../controllers/mypageController');
const mypageRouter = express.Router();
const { loginRequired } = require('../utils/auth');

mypageRouter.get('/account', loginRequired, mypageController.getMyProfile);
mypageRouter.put('/account', loginRequired, mypageController.updateMyProfile);
mypageRouter.delete(
  '/account',
  loginRequired,
  mypageController.deleteMyProfile
);

mypageRouter.get(
  '/bookinglist',
  loginRequired,
  mypageController.getAllBookingList
);

mypageRouter.delete(
  '/:productOptionId',
  loginRequired,
  mypageController.deleteBookingTicket
);

module.exports = {
  mypageRouter,
};
