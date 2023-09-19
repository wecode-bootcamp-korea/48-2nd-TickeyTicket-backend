const express = require('express');
const routes = express.Router();

const { kakaoRouter } = require('./kakaoRouter');
const { userRouter } = require('./userRouter');
const { productRouter } = require('./productRouter');
const { reviewRouter } = require('./reviewRouter');
const { wishlistRouter } = require('./wishlistRouter');


routes.use('/kakao-router', kakaoRouter);
routes.use('/user-router', userRouter);
routes.use('/product', productRouter);
routes.use('/mypagereview', reviewRouter);
routes.use('/wishlist', wishlistRouter);

module.exports = routes;
