// // controllers/clientesController.js
// const db = require('../config/db'); // Importa a configuração da conexão com o banco de dados a partir do arquivo 'db' localizado na pasta 'config'.

// // Função para buscar usuário pelo e-mail
// export const getUserByEmail = async (req, res) => {
//   const { email } = req.query; // Pegando o email da query string

//   try {
//     const [user] = await db.promise().query('SELECT * FROM clientes WHERE email = ?', [email]);
//     if (user.length === 0) {
//       return res.status(404).send('Cliente não encontrado');
//     }
//     res.json(user[0]);
//   } catch (err) {
//     console.error('Erro ao buscar cliente:', err);
//     res.status(500).send('Erro ao buscar cliente');
//   }
// };