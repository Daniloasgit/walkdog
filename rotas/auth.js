const express = require('express');
const router = express.Router();
const authController = require('../controles/authController');

//Rota para registro de usuário
router.post('/register', authController.registerUser);


router.post('/login', authController.loginUser)

module.exports = router;