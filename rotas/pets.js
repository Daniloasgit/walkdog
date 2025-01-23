import express from 'express';
import * as PetsFunctions from '../controllers/petscontroller.js'; // Importa as funções de fetch


const router = express.Router(); 

//rotas para as funções envolvendo pets

// rota para buscar por pets ja registrados
    router.get('/buscarPets', PetsFunctions.getAllPets);

    //rota para registrar um novo pet
    router.post('/registrarPets', PetsFunctions.AddPet);

    // //rota para atualizar um pet ja registrado
    router.patch('/atualizarPets/:id', PetsFunctions.updatePet);

    // //rota para deletar um pet ja registrado
    router.delete('/deletarPets/:id', PetsFunctions.deletePet);
    
export default router;