const express = require('express');
const routes = express.Router();

const { kakaoRouter } = require("./kakaoRouter");

routes.use("/kakao-router", kakaoRouter);

module.exports =  routes ;