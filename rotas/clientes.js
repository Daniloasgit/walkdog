const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const clientesController = require('../controles/clientesController'); // Importa o controlador de clientes


router.get('/clientes', clientesController.getALLClientes); // Rota para obter todos os clientes
router.post('/clientes', clientesController.addClientes);   // Rota para adicionar um novo cliente
router.patch('/clientes/:id', clientesController.updateClientesPatch); // Rota para atualizar um cliente
router.delete('/clientes/:id', clientesController.deleteClientes);  // Rota para deletar um cliente


 module.exports = router;
