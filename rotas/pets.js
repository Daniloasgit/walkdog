const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const petsControllers = require('../controles/petsController')

router.get('/', petsControllers.getALLPets); 

router.post('/', petsControllers.addPet); 

router.patch('/:id', petsControllers.updatePetPatch); 

router.delete('/:id', petsControllers.deletePet);

module.exports = router;