// rotas/authClientes.js

import express from 'express'; 
const router = express.Router();
const authController = require('../controllers/authClientes.js'); // Usando require aqui



// Definir rotas de autenticação
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/request-password-reset', authController.requestPasswordReset);
router.post('/reset-password', authController.resetPassword);

export default router;
