const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const transactionsController = require('../controles/clientesController')// Importa o controlador de transações


router.get('/',transactionsController.getALLClientes); 

router.post('/', transactionsController.addClientes); 

router.patch('/:id', transactionsController.updateClientesPatch); 

router.delete('/:id', transactionsController.deleteClientes);

 module.exports = router
