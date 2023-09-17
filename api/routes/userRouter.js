const express = require('express');
const userControllers = require('../controllers/userControllers');
const userRouter = express.Router();

userRouter.post('/signup', userControllers.signUp);
userRouter.post('/signin', userControllers.signIn);

module.exports = { userRouter };