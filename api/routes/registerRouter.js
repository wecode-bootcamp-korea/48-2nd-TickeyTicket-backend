const express = require('express');
const registerRouter = express.Router();
const { loginRequired } = require('../utils/auth');

const registerController = require('../controllers/registerController');

registerRouter.post('', loginRequired, registerController.registerPerformance);

module.exports = { registerRouter };
