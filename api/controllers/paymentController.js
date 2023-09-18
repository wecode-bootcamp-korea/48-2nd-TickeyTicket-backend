const paymentService = require('../services/paymentService');
const { catchAsync, globalErrorHandler } = require('../utils/error');

const handlePaymentResult = catchAsync(async (req, res) => {
    const { userId, statusCode, productOptionId, paymentTotalQuantity, paymentTotalPrice } = req.body;

    if (statusCode !== 200) {
        throw new Error('payment failed. Please try again.');
    }
    
    await paymentService.storePaymentInformation(userId, productOptionId, paymentTotalQuantity, paymentTotalPrice);

    return res.status(200).json({ message: 'Payment successful!' });
});

module.exports = {
    handlePaymentResult,
};