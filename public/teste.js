const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
app.use(express.json());

// Configuração do BD
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '031024',
  database: 'walkmarket'
};

// Função para adicionar dados
async function adicionarDados(req, res) {
  try {
    // Conectar ao BD
    const db = await mysql.createConnection(dbConfig);
    
    // Query para inserir dados
    const query = 'INSERT INTO clientes (nome, usuario, email, senha) VALUES (?, ?, ?, ?)';
    const valores = [req.body.nome, req.body.email];
    
    // Executar query
    const [result] = await db.execute(query, valores);
    
    // Fechar conexão
    await db.end();
    
    // Retornar resposta
    res.status(201).send({ mensagem: 'Dados adicionados com sucesso', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).send({ mensagem: 'Erro ao adicionar dados' });
  }
}

// Rota para adicionar dados
app.post('/adicionar', adicionarDados);

// Iniciar servidor
const porta = 3000;
app.listen(porta, () => {
  console.log(`Servidor iniciado em http://localhost:${porta}`);
});



