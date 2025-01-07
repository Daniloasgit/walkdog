// server.js
import dotenv from 'dotenv'; // Carregar variáveis de ambiente
dotenv.config(); // Carregar as variáveis do arquivo .env
import express from 'express'; // Framework Express
import cors from 'cors'; // CORS middleware
const db = require('./config/db'); // Importa a configuração da conexão com o banco de dados a partir do arquivo 'db' localizado na pasta 'config'.
import clientesRotas from './rotas/clientes.js'; // Rotas de clientes
import authRotas from './rotas/auth.js'; // Rotas de autenticação
import servicesRoutes from './rotas/servico.js'; // Rotas de serviços

const app = express(); // Inicializar a aplicação Express

// Middleware para CORS e parsing de JSON
app.use(cors());
app.use(express.json());

// Configurar rotas
app.use('/api/clientes', clientesRotas);
app.use('/api/auth', authRotas);
app.use('/api/service', servicesRoutes);

// Servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota inicial
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// Configurar o servidor para uma porta específica
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
