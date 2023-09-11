const express = require('express');
const reviewRouter = express.Router();
const reviewController = require('../controllers/reviewController');
const { loginRequired } = require('../utils/auth');

reviewRouter.get('/:userId', reviewController.getAllMyReviewById);
reviewRouter.post('', loginRequired, reviewController.createReview);
reviewRouter.put('', loginRequired, reviewController.modifyReview);
reviewRouter.delete('', loginRequired, reviewController.deleteReview);

module.exports = { reviewRouter };
