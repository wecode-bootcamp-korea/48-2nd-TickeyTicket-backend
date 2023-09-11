const reviewService = require('../services/reviewService');
const { catchAsync } = require('../utils/error');

const getAllMyReviewById = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  const result = await reviewService.getAllMyReviewById(userId);

  res.status(200).json({ data: result });
});

const createReview = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const { productOptionId, rating, content, title } = req.body;
  const result = await reviewService.createReview(
    userId,
    productOptionId,
    rating,
    content,
    title
  );

  res.status(200).json({ data: result });
});

const modifyReview = catchAsync(async (req, res) => {
  const { reviewId, userId, content, rating, title } = req.body;
  const result = await reviewService.modifyReview(
    reviewId,
    userId,
    content,
    rating,
    title
  );

  res.status(200).json({ data: result });
});

const deleteReview = catchAsync(async (req, res) => {
  const { reviewId, userId } = req.body;
  const result = await reviewService.deleteReview(reviewId, userId);

  res.status(200).json({ data: result });
});

module.exports = {
  getAllMyReviewById,
  createReview,
  modifyReview,
  deleteReview,
};
