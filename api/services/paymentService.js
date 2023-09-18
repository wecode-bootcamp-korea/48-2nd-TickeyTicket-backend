const paymentDao = require('../models/paymentDao');
const QRCode = require('qrcode');
const Jimp = require('jimp');
const QrCodeReader = require('qrcode-reader');


const storePaymentInformation = async ( userId, productOptionId, paymentTotalQuantity, paymentTotalPrice ) => {
    const paymentData = {
        userId,
        productOptionId,
        paymentTotalQuantity,
        paymentTotalPrice,
        paymentCode: generatePaymentCode()
    };

    const paymentDataString = JSON.stringify(paymentData);
    const qrcodeUrl = await QRCode.toDataURL(paymentDataString);

    await paymentDao.updateProductTicekts(productOptionId, paymentTotalQuantity);
    await paymentDao.insertPaymentInformation(userId, productOptionId, paymentData.paymentCode, qrcodeUrl, paymentTotalQuantity, paymentTotalPrice);
};

const generatePaymentCode =  () => {
    return Math.random().toString(36).substring(2, 9);
};

const decodeQR = async (qrImagePath) => {
    const image = await Jimp.read(qrImagePath);
    const qr = new QrCodeReader();

    const result = await new Promise((resolve, reject) => {
        qr.callback = (error, value) => {
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }
        };
        qr.decode(image.bitmap);
    });

    return JSON.parse(result.data);
}

module.exports = {
    storePaymentInformation,
    decodeQR
};