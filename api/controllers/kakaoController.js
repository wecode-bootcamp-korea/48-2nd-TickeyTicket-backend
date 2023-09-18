const kakaoService = require('../services/kakaoService');
const { catchAsync } = require('../utils/error');

const kakaoLogin = catchAsync(async (req, res) => {
  const { kakaoAccessToken } = req.body;

  if (!kakaoAccessToken)
  {
  const error = new Error("KEY_ERROR")
  error.statusCode = 400;
  
  throw error;
  }

    const accessToken = await kakaoService.kakaoLogin(kakaoAccessToken);
    
    res.status(200).json({ accessToken });
});

module.exports = { kakaoLogin,};