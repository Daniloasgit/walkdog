const express = require('express'); //Importa o módulo express
const router = express.Router(); //Cria um novo roteador usando o método Router() do express
const authController = require('../controles/authController'); //Importa as funções de autenticação

//Define um rota POST para '/register', que chama a função registerUser' do 'authController' para registrar u mnovo usuário.
router.post('/register', authController.registerUser);

//Define uma rota POST para '/login', que chama a função 'loginUser' do 'authController' para autenticar um usuário.
router.post('/login', authController.loginUser);