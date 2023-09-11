const express = require('express');
const routes = express.Router();

const { kakaoRouter } = require('./kakaoRouter');
const { userRouter } = require('./userRouter');
const { productRouter } = require('./productRouter');
const { reviewRouter } = require('./reviewRouter');

routes.use('/kakao-router', kakaoRouter);
routes.use('/user-router', userRouter);
routes.use('/product', productRouter);
routes.use('/mypagereview', reviewRouter);

module.exports = routes;
