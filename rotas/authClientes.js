const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const clientesController = require('../controles/clientesController')// Importa o controlador de clientes
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware,clientesController.getALLClientes); 

router.post('/',authMiddleware,clientesController.addClientes);

router.patch('/:id', authMiddleware,clientesController.updateClientesPatch);

router.delete('/:id', authMiddleware,clientesController.deleteClientes);

 module.exports = router
