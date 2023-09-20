const axios = require('axios');
const jwt = require('jsonwebtoken');
const kakaoDao = require('../models/kakaoDao');

const kakaoLogin = async (kakaoAccessToken) => {
  const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization: `bearer ${kakaoAccessToken}`,
    },
  });
  if (!response || response.status !== 200) {
    const error = new Error('KAKAO CONNECTION ERROR');
    error.statusCode = 400;

    throw error;
  }

  const userInfo = {
    kakaoId: response.data.id,
    nickName: response.data.properties.nickname,
    email: response.data.kakao_account.email,
    birthDate: response.data.kakao_account.birthday,
    gender: response.data.kakao_account.gender,
    profileImage: response.data.properties.profile_image,
  };
  const { kakaoId, nickName, email, birthDate, gender, profileImage } =
    userInfo;

  const userData = await kakaoDao.getUserByEmail(email);
  if (!userData) {
    await kakaoDao.createUser(
      kakaoId,
      nickName,
      email,
      birthDate,
      gender,
      profileImage
    );
    const userSerch = await kakaoDao.getUserByEmail(email);
    return jwt.sign(
      { id: userSerch.id, email: userSerch.email },
      process.env.JWT_SECRET
    );
  } else {
    return jwt.sign(
      { id: userData.id, email: userData.email },
      process.env.JWT_SECRET
    );
  }
};

module.exports = {
  kakaoLogin,
};
