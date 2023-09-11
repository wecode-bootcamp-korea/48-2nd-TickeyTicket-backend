const reviewDao = require('../models/reviewDao');

const getAllMyReviewById = async (userId) => {
  return await reviewDao.getAllMyReviewById(userId);
};

const createReview = async (
  userId,
  productOptionId,
  rating,
  content,
  title
) => {
  const paymentInfo = await reviewDao.checkPaymentStatus(
    userId,
    productOptionId
  );

  if (!paymentInfo) {
    throw new Error('이 공연을 결제하지 않았거나 결제가 완료되지 않았습니다.');
  }

  const productOptionInfo = await reviewDao.getProductOptionInfo(
    productOptionId
  );

  if (!productOptionInfo) {
    throw new Error('정보를 찾을 수 없습니다.');
  }

  const { start_date: startDate, start_time: startTime } = productOptionInfo;

  const currentDate = new Date();
  const performanceDateTime = new Date(`${startDate}T${startTime}`);

  if (performanceDateTime > currentDate) {
    throw new Error('공연 시작 이전에는 리뷰를 작성할 수 없습니다.');
  }

  const result = await reviewDao.createReview(
    userId,
    productOptionId,
    rating,
    content,
    title
  );

  return result;
};

const modifyReview = async (reviewId, userId, content, rating, title) => {
  return await reviewDao.modifyReview(reviewId, userId, content, rating, title);
};

const deleteReview = async (reviewId, userId) => {
  return await reviewDao.deleteReview(reviewId, userId);
};

module.exports = {
  getAllMyReviewById,
  createReview,
  modifyReview,
  deleteReview,
};
