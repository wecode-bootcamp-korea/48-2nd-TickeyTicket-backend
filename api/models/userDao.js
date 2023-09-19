const appDataSource = require("./dataSource");

const createUser = async (
  userName,
  nickName,
  email,
  password,
) => {
  try {
    const result = await appDataSource.query(
            `
            INSERT INTO users (
                user_name,
                nickname, 
                email, 
                password
                ) VALUES (
                ?, ?, ?, ?)
            `,
      [
        userName,
        nickName,
        email,
        password,
      ]
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
        `
      SELECT id, email, password
      FROM users
      WHERE email = ?
      `,
        [email]
      );
      return result;
    } catch {
      const error = new Error("dataSource Error : getUserByEmail");
      error.statusCode = 400;
  
      throw error;
    }
  };
  
  const getUserById = async (id) => {
    try {
      const [result] = await appDataSource.query(
        `
      SELECT id, email, password
      FROM users
      WHERE id = ?
      `,
        [id]
      );
      return result;
    } catch {
      const error = new Error("dataSource Error : getUserById");
      error.statusCode = 400;
  
      throw error;
    }
  };
  
  module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
  };