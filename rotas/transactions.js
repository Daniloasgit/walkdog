const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const transactionsController = require('../controles/transactionsController')// Importa o controlador de transações
const petsControllers = require('../controles/petsController')

router.get('/',transactionsController.getALLClientes); 

router.post('/', transactionsController.addClientes); 

router.patch('/:id', transactionsController.updateClientesPatch); 

router.delete('/:id', transactionsController.deleteClientes);

/*Área dos pets*/ 
router.get('/', petsControllers.getALLPets); 

router.post('/', petsControllers.addPet); 

router.patch('/:id', petsControllers.updatePetPatch); 

router.delete('/:id', petsControllers.deletePet);

module.exports = router