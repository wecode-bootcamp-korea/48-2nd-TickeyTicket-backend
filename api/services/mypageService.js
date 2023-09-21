const bcrypt = require('bcrypt');
const { validatePassword } = require('../utils/validator');

const mypageDao = require('../models/mypageDao');

const getAllBookingList = async (userId) => {
  return await mypageDao.getAllBookingList(userId);
};

const deleteBookingTicket = async (userId, paymentCode, productOptionId) => {
  const ticket = await mypageDao.checkTicket(
    userId,
    paymentCode,
    productOptionId
  );
  const selectticket = await mypageDao.checkTicketList(
    userId,
    paymentCode,
    productOptionId
  );
  const checkticket = ticket.checkdate;
  const checkticketlist = selectticket.id;
  if (!checkticketlist || checkticket == 0) {
    const error = new Error('This Ticket do not cancel');
    error.statusCode = 401;

    throw error;
  }

  if (checkticket == 1) {
    return await mypageDao.deleteBookingTicket(
      userId,
      paymentCode,
      productOptionId
    );
  }
};

const hashPassword = async (plaintextPassword) => {
  const saltRounds = 10;

  return await bcrypt.hash(plaintextPassword, saltRounds);
};

const getMyProfile = async (userId) => {
  return await mypageDao.getMyProfile(userId);
};

const updateMyProfile = async (data) => {
  const { userId, userName, password, phoneNumber, birthdate, gender } = data;

  validatePassword(password);
  const hashedPassword = await hashPassword(password);

  return await mypageDao.updateMyProfile(
    userId,
    userName,
    hashedPassword,
    phoneNumber,
    birthdate,
    gender
  );
};

const deleteMyProfile = async (userId) => {
  return await mypageDao.deleteMyProfile(userId);
};

module.exports = {
  getAllBookingList,
  deleteBookingTicket,
  getMyProfile,
  updateMyProfile,
  deleteMyProfile,
};
