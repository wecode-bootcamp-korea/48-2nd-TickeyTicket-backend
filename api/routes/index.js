const express = require('express');
const routes = express.Router();

const { kakaoRouter } = require('./kakaoRouter');
const { userRouter } = require('./userRouter');
const { productRouter } = require('./productRouter');

routes.use('/kakao-router', kakaoRouter);
routes.use('/user-router', userRouter);
routes.use('/product', productRouter);

module.exports = routes;
