//  COMEÇO DA CONEXÃO DO SERVIDOR

const dotenv = require('dotenv'); // Importa o pacote dotenv para gerenciar variáveis de ambiente

dotenv.config(); // Carrega as variáveis de ambiente do arquivo.env

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path'); // Para lidar com caminhos de arquivos estáticos
const db = require('./config/db'); // Importa a conexão com o banco de dados 
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const transactionsRoutes = require('./rotas/transactions');

app.use('/api/clientes', transactionsRoutes);


app.get('/', (req, res) => { 
    res.send('Servidor está rodando'); // Define uma rota inicial para testar o servidor 
    });

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL');
});

const porte = process.env.PORT || 3000; // Define a porta a partir da variável de ambiente ou usa a porta 3000 como padrão
app.listen(porte, () => {
  console.log(`Servidor rodando na porta ${porte}`); // Loga uma mensagem informando que o servidor está rodando
});

// FIM DA CONEXÃO COM O SERVIDOR