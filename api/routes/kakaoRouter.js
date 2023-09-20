const express = require('express');
const kakaoController = require('../controllers/kakaoController');
const kakaoRouter = express.Router();

kakaoRouter.post('/kakaologin', kakaoController.kakaoLogin);

module.exports = { kakaoRouter };
