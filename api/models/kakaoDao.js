const appDataSource = require('./dataSource');

const getUserByKakaoEmail = async (email) => {
  try {
    const result = await appDataSource.query(
      `SELECT 
      id,
      kakao_id,
      nickname,
      profile_image,
      email,
      birthdate,
      gender
      FROM users 
      WHERE email = ?`,
      [email]
    );

    return result;

} catch(err) {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const [result] = await appDataSource.query(
      `SELECT 
        id,
        kakao_id,
        nickname,
        profile_image,
        email,
        birthdate,
        gender
        FROM users WHERE email = ?`,
      [email]
    );

    return result;

} catch(err) {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

const createUser = async (
    kakaoId,
    nickName,
    email,
    birthDate,
    gender,
    profileImage
    ) => {
  try {
  await appDataSource.query(
      `INSERT INTO users(
        kakao_id,
        nickname,
        email,
        birthdate,
        gender,
        profile_image
      ) VALUES (?,?,?,?,?,?)`,
      [ kakaoId, nickName, email, birthDate, gender, profileImage]
    );

} catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

module.exports = {
  getUserByKakaoEmail,
  getUserByEmail,
  createUser,
};