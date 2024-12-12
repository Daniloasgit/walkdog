const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const clientesController = require('../controles/clientesController')// Importa o controlador de transações
const authMiddleware = require('../middleware/authMiddleware')

router.get('/',clientesController.getALLClientes); 

router.post('/', clientesController.addClientes); 

 module.exports = router
