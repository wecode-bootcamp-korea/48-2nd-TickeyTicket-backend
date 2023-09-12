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
  const checkticket = ticket.checkticketdate;
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

module.exports = {
  getAllBookingList,
  deleteBookingTicket,
};
