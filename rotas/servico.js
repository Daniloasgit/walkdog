const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador
const service = require ('../controles/servicoController');


router.get('/', service.getAllServices); // Obtém todos os serviços

router.post('/', service.addService); // Adiciona um novo serviço

router.delete('/', service.deletarRegistros); // deleta um serviço ja existente

module.exports = router;