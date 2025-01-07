// rotas/clientes.js
import express from 'express';
import { getUserByEmail } from '../controllers/clientesController.js'; // Importar o controlador

import authController from '../controllers/authClientes.js'; // Certifique-se de usar a extensão .js se estiver usando módulos ES6

const router = express.Router();

// Definir rotas de autenticação
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/request-password-reset', authController.requestPasswordReset);
router.post('/reset-password', authController.resetPassword);

export default router;
