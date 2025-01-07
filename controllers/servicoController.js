// const db = require('../config/db'); //Conexão com banco de dados

// const express = require('express');
// const router = express.Router();
// const servicoController = require('../controles/servicoController');

// //Função para chamar todos os serviços
// const getAllServices = (req, res) => {
//     db.query('SELECT * FROM servico', (err, results) => {
//         if(err) {
//             console.error('Erro ao obter serviço:', err);
//             res.status(500).send('Erro ao obter serviço');
//             return;
//         }
//         res.json(results);
//     });
// };

// const addService = (req, res) => {
//     const{idRegistro, dogwalker_id, cliente_id, animal_id, preco_servico, entrega, devolucao} = req.body;

//     //Verificar duplicidade
//     db.query(
//         'SELECT * FROM servico WHERE idRegistro=? AND dogwalker_id=? AND cliente_id=? AND animal_id=? AND preco_servico=? AND entrega=? AND devolucao=?',
//         [idRegistro, dogwalker_id, cliente_id, animal_id, preco_servico, entrega, devolucao],
//         (err, results) => {
//             if(err) {
//                 console.error('Erro ao verificar serviço', err);
//                 res.status(500).send('Erro ao verificar serviço');
//                 return;
//             }
//             if(results.length > 0) {
//                 res.status(400).send('Serviço já cadastrado');
//                 return;
//             }

//     db.query('INSERT INTO servico(idRegistro, dogwalker_id, cliente_id, animal_id, preco_servico, entrega, devolucao) VALUES(?, ?, ?, ?, ?, ?, ?)',
//         [idRegistro, dogwalker_id, cliente_id, animal_id, preco_servico, entrega, devolucao],
//         (err, results) => {
//             if(err) {
//                 console.error('Erro ao adicionar serviço:', err);
//                 res.status(500).send('Erro ao adicionar serviço');
//                 return;
//             }
//             res.status(201).send('Serviço adiconado com sucesso');
//         }
//     );
//         }
//     );
// }


// const cron = require ('node-cron');

// // Função para deletar registros
// async function deletarRegistros() {
//     const dataLimite = new Date();
//     dataLimite.setMonth(dataLimite.getMonth() - 6);
  
//     const query = 'DELETE FROM servico WHERE devolucao < ?';
//     db.execute(query, [dataLimite], (err, results) => {
//       if (err) {
//         console.error('Erro ao excluir registros:', err);
//         return;
//       }
//       console.log('Registros excluídos com sucesso!');
//     });
//   }

//   cron.schedule('0 0 1 1-12/6 *', async () => {
//     await deletarRegistros();
//   });
  

  
// module.exports = {
//     getAllServices,
//     addService,
//     deletarRegistros
// };