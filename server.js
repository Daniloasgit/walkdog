//  COMEÇO DA CONEXÃO DO SERVIDOR

const dotenv = require('dotenv'); // Importa o pacote dotenv para gerenciar variáveis de ambiente

dotenv.config(); // Carrega as variáveis de ambiente do arquivo.env

const express = require('express');
const app = express();
const clientesRouter = require('./rotas/clientes');
const cors = require('cors');
const db = require('./config/db'); // Importa a conexão com o banco de dados 
const mysql = require('mysql2');
const path = require('path'); // Para lidar com caminhos de arquivos estáticos
//Importar as rotas de clientes e autenticação

app.use(cors());
app.use(express.json());
app.use('/api/clientes', clientesRouter);
// Configurando para servir o conteúdo estático da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rotas para serviços
app.get('/deletar-registros', async (req, res) => {
  try {
    await deletarRegistros();
    res.send('Função de deletar registros executada com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao executar a função de deletar registros');
  }
});

const servicesRoutes = require('./rotas/servico');
app.use('/api/service', servicesRoutes);

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL');
});

const porte = process.env.PORT || 5500; // Define a porta a partir da variável de ambiente ou usa a porta 3000 como padrão
app.listen(porte, () => {
  console.log(`Servidor rodando na porta ${porte}`); // Loga uma mensagem informando que o servidor está rodando
});

// FIM DA CONEXÃO COM O SERVIDOR
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Servir o arquivo index.html como a página inicial
});

