const express = require('express');
const paymentRouter = express.Router();
const paymentController = require('../controllers/paymentController');
const { loginRequired } = require('../utils/auth')

paymentRouter.post('/handle-payment',loginRequired, paymentController.handlePaymentResult);



module.exports = {
    paymentRouter
}
