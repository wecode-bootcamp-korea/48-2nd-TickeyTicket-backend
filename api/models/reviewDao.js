const appDataSource = require('./dataSource');

const getAllMyReviewById = async (userId) => {
  const result = await appDataSource.query(
    `
     SELECT
       r.id as reviewId,
       r.user_id as userId,
       r.product_option_id as productOptionId,
       u.nickname,
       r.title,
       r.rating,
       r.content,
       DATE_FORMAT(r.created_at, '%y/%m/%d') AS writtenDate
     FROM 
       reviews r
     INNER JOIN 
       users AS u ON r.user_id = u.id
     WHERE 
       r.user_id = ?
       `,
    [userId]
  );
  return result;
};

const checkPaymentStatus = async (userId, productOptionId) => {
  const paymentInfo = await appDataSource.query(
    `
    SELECT 
    user_id as userId, 
    product_option_id as productOptionId,
    payment_code as paymentCode,
    qrcode_url as qrcodeUrl,
    payment_total_quantity as paymentTotalQuantity,
    payment_total_price as paymentTotalPrice
    FROM payment_information
    WHERE user_id = ? 
    AND product_option_id = ?
    `,
    [userId, productOptionId]
  );

  return paymentInfo.length > 0;
};

const getProductOptionInfo = async (productOptionId) => {
  const productOptionInfo = await appDataSource.query(
    `
    SELECT start_date, start_time 
    FROM product_options 
    WHERE id = ?
    `,
    [productOptionId]
  );

  return productOptionInfo.length > 0 ? productOptionInfo[0] : null;
};

const createReview = async (
  userId,
  productOptionId,
  rating,
  content,
  title
) => {
  const result = await appDataSource.query(
    `
     INSERT INTO reviews (
       user_id,
       product_option_id,
       rating,
       content,
       title,
       created_at
     ) VALUES (?,?,?,?,?, NOW())
    `,
    [userId, productOptionId, rating, content, title]
  );

  return result;
};

const modifyReview = async (reviewId, userId, content, rating, title) => {
  const result = await appDataSource.query(
    `
      UPDATE reviews
      SET
       rating = ?,
       content = ?,
       title = ?
      WHERE id = ?
      AND user_id = ?
      `,
    [rating, content, reviewId, userId, title]
  );
  return result;
};

const deleteReview = async (reviewId, userId) => {
  const result = await appDataSource.query(
    `
      DELETE 
      FROM reviews
      WHERE id = ?
      AND user_id = ?
      `,
    [reviewId, userId]
  );
  return result;
};

module.exports = {
  getAllMyReviewById,
  checkPaymentStatus,
  getProductOptionInfo,
  createReview,
  createReview,
  modifyReview,
  deleteReview,
};
