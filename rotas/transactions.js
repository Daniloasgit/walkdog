const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const transactionsController = require('../controles/transactionsController')// Importa o controlador de transações


router.get('/',transactionsController.getALLTransactions); 


module.exports = router