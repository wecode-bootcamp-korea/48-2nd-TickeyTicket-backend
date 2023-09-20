const express = require('express');

const mypageController = require('../controllers/mypageController');
const mypageRouter = express.Router();
const { loginRequired } = require('../utils/auth');

mypageRouter.delete("/:productOptionId", loginRequired, mypageController.deleteBookingTicket);

module.exports = {
    mypageRouter
};
