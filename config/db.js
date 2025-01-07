// config/db.js
import mysql from 'mysql2';

// Criação da conexão com o banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST,  // Geralmente 'localhost', mas pode ser um IP ou nome de host remoto
  user: process.env.DB_USER,  // Nome do usuário para o banco
  password: process.env.DB_PASS,  // Senha do banco
  database: process.env.DB_NAME  // Nome do banco de dados
});

// Conecta ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

export default db;  // Exporta a conexão para ser utilizada em outros módulos
