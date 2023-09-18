const express = require('express');
const routes = express.Router();

const { kakaoRouter } = require('./kakaoRouter');
const { userRouter } = require('./userRouter');
const { productRouter } = require('./productRouter');
const { reviewRouter } = require('./reviewRouter');
const { wishlistRouter } = require('./wishlistRouter');
const { mypageRouter } = require('./mypageRouter');
const { mainRouter } = require('./mainRouter');
const { registerRouter } = require('./registerRouter');
const { paymentRouter } = require('./paymentRoute');

routes.use('/kakao-router', kakaoRouter);
routes.use('/user-router', userRouter);
routes.use('/product', productRouter);
routes.use('/mypagereview', reviewRouter);
routes.use('/wishlist', wishlistRouter);
routes.use('/mypage', mypageRouter);
routes.use('/main', mainRouter);
routes.use('/registerproduct', registerRouter);
routes.use("/payment", paymentRouter);

module.exports = routes;
