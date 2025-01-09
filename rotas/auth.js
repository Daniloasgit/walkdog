import express from 'express';

import * as authentication from '../controllers/authentication.js'; // Importa todas as funções exportadas no arquivo
// import * as authentication from '../controllers/authentication.js'; // Importa todas as funções exportadas no arquivo
const router = express.Router();

//Rotas definidas
router.post('/registrar', authentication.registrarCliente); // registro

router.post('/login', authentication.loginCliente); // login




export default router;