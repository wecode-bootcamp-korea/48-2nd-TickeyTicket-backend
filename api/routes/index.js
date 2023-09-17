const express = require('express');
const routes = express.Router();

const { kakaoRouter } = require("./kakaoRouter");
const { userRouter } = require("./userRouter");

routes.use("/kakao-router", kakaoRouter);
routes.use("/user-router", userRouter);

module.exports = routes;