import express from 'express';
import * as authentication from '../controllers/authentication.js'; // Importa as funções de autenticação
import autenticarToken from '../middleware/authorization.js'; // Middleware de autenticação

const router = express.Router();

// Rota para login e registro (não precisa de autenticação)
router.post('/registrarcliente', authentication.registrarCliente);
router.post('/loginCliente', authentication.loginCliente);
router.post('/registrarWalker', authentication.registrarDogwalker);
router.post('/loginWalker', authentication.loginDogwalker);
router.post('/logout', autenticarToken,authentication.logout); // logout

// Rota de perfil
// router.get('/perfil', autenticarToken, (req, res) => {
//     res.json({
//         userId: req.userId,
//         email: req.email,
//         nome: req.nome
//     });
// });

export default router;
