const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const walksControllers = require('../controles/dogwalkerController');

router.get('/', walksControllers.getALLWalks); 

router.post('/', walksControllers.addWalks); 

router.patch('/:id', walksControllers.updateWalksPATCH); 

router.delete('/:id', walksControllers.deleteWalks);

module.exports = router;