const { appDataSource } = require('./dataSource');
const { globalErrorHandler } = require('../utils/error');

const insertPaymentInformation = async (
  userId,
  productOptionId,
  paymentCode,
  qrcodeUrl,
  paymentTotalQuantity,
  paymentTotalPrice
) => {
  try {
    await appDataSource.query(
      `INSERT INTO payment_information(
                user_id, 
                product_option_id, 
                payment_code,
                qrcode_url, 
                payment_total_quantity, 
                payment_total_price)
            VALUES (?, ?, ?, ?, ?, ?);`,
      [
        userId,
        productOptionId,
        paymentCode,
        qrcodeUrl,
        paymentTotalQuantity,
        paymentTotalPrice,
      ]
    );
  } catch (err) {
    throw new Error('Database Error: Failed to store payment information.');
  }
};

const updateProductTicekts = async (paymentTotalQuantity, productOptionId) => {
  try {
    await appDataSource.query(
      `UPDATE product_options
             SET available_ticket = available_ticket - ? 
             WHERE id = ?;`,
      [paymentTotalQuantity, productOptionId]
    );
  } catch (err) {
    throw new Error('Database Error: Failed to update tickets.');
  }
};

module.exports = {
  insertPaymentInformation,
  updateProductTicekts,
};
