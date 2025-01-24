import express from 'express';
import * as clientesFunction from '../controllers/clientesController.js'; // Importa as funções de fetch

router.get('/buscarClientes', clientesFunction.getAllClientes);

//função para deletar clientes 
router.delete('/deletarCliente/:id', clientesFunction.deletarCliente);

export default router;