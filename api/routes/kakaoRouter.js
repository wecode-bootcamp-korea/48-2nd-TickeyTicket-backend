const express = require('express');
const kakaoControllers = require('../controllers/kakaoControllers');
const kakaoRouter = express.Router();

kakaoRouter.post('/kakaologin', kakaoControllers.kakaoLogin);

module.exports = { kakaoRouter };