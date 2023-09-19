const express = require('express');

const wishlistController = require('../controllers/wishlistController');
const wishlistRouter = express.Router();
const { loginRequired } = require('../utils/auth');

wishlistRouter.get("/user-wishlist/:productId", loginRequired, wishlistController.addWishList);
wishlistRouter.delete("/:productId", loginRequired, wishlistController.deleteWishList);

module.exports = {
    wishlistRouter
};