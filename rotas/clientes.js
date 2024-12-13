const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const clientesController = require('../controles/clientesController')// Importa o controlador de clientes


router.get('/',clientesController.getALLClientes); 

router.post('/', clientesController.addClientes); 

router.patch('/:id', clientesController.updateClientesPatch); 

router.delete('/:id', clientesController.deleteClientes);

 module.exports = router
