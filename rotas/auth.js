import express from 'express';

import * as authentication from '../controllers/authentication.js'; // Importa todas as funções exportadas no arquivo
import * as tokenmiddleware from '../middleware/authorization.js';
// import * as authentication from '../controllers/authentication.js'; // Importa todas as funções exportadas no arquivo
const router = express.Router();

//Rotas definidas

router.post('/registrarcliente', authentication.registrarCliente); // registro

router.post('/loginCliente', authentication.loginCliente); // login

router.post('/registrarWalker',authentication.registrarDogwalker); // registro

router.post('/loginWalker', authentication.loginDogwalker); // login

// função para logout 

// router.post('/logout', authentication.logout); // logout


export default router;
