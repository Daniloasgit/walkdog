import express from 'express';

import * as petController from '../controllers/petscontroller.js'; // Importa as funções de autenticação

const router = express.Router();

router.get ('/buscarPets', petController.getAllPets);

router.post('/registrarPets', petController.addPet);

router.patch('/atualizarPets/:id', petController.updatePet);

router.delete('/deletarPet/:id', petController.deletePet);

export default router;