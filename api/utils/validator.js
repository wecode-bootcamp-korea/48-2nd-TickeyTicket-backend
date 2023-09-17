const validateSignUp = async (
    email,
    password
    
  ) => {
  const emailRegex = 
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegex = 
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
    if (!emailRegex.test(email)) {
      const error = new Error("INVALID_USER : email");
      error.statusCode = 400;
  
      throw error;
    }
  
    if (!passwordRegex.test(password)) {
      const error = new Error("INVALID_USER : password");
      error.statusCode = 400;
  
      throw error;  
    }
  };

module.exports = {
    validateSignUp,
}