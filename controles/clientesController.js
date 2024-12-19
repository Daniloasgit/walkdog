const db = require('../config/db'); // Importa a conexão com o banco de dados
const express = require('express');
const router = express.Router();
const app = express();

// Middleware para lidar com dados JSON
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Lógica para autenticar o usuário
  if (email === 'botelhopinto13@gmail.com' && password === 'password1') {
    res.status(200).json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

// app.listen(3000, () => {
//   console.log('Servidor rodando na porta 3000');
// });


 //Função para obter todos os clientes
 const getALLClientes = (req, res) => {
    db.query('SELECT * FROM clientes', (err, results) => {
        if (err) {
            console.error('Erro ao obter Clientes:', err);
            res.status(500).send('Erro ao obter Clientes');
            return;
        }
        res.json(results);
    });
};

// Função para adicionar um novo cliente
const addClientes = async (req, res) => {
  const { id, nome, usuario, email, senha, telefone, atuacao } = req.body;

  // Verifica se todos os campos obrigatórios foram fornecidos
  if (!nome || !usuario || !email || !senha || !telefone || !atuacao) {
      return res.status(400).send('Todos os campos são obrigatórios.');
  }

  try {
      // Verifica se o cliente já está cadastrado
      const [result] = await db.promise().query(
          'SELECT * FROM clientes WHERE email = ?', [email]
      );

      if (result.length > 0) {
          return res.status(400).send('Cliente já cadastrado');
      }

      // Criação do novo cliente
      const query = 'INSERT INTO clientes (id, nome, usuario, email, senha, telefone, atuacao) VALUES (?, ?, ?, ?, ?, ?, ?)';
      const values = [id, nome, usuario, email, senha, telefone, atuacao];

      // Insere o novo cliente no banco de dados
      await db.promise().query(query, values);

      return res.status(201).send('Cliente cadastrado com sucesso');
  } catch (err) {
      console.error('Erro ao adicionar cliente:', err);  // Log para o desenvolvedor
      return res.status(500).send('Erro ao adicionar cliente. Tente novamente mais tarde.');
  }
};


//             // Se não existir, adiciona o cliente
//             db.query(
//                 'INSERT INTO clientes (id, nome, usuario, email, senha, telefone, atuacao) VALUES(?, ?, ?, ?, ?, ?, ?)',
//                 [id, nome, usuario, email, senha, telefone, atuacao],
//                 (err, results) => {
//                     if (err) {
//                         console.error('Erro ao adicionar Cliente:', err);
//                         res.status(500).send('Erro ao adicionar cliente');
//                         return;
//                     }
//                     res.status(201).send('Cliente adicionado com sucesso');
//                 }
//             );
//         }
//     );
// };

module.exports = {
    getALLClientes,
    addClientes,
  };