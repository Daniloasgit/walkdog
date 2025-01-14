import path from 'path';
import { fileURLToPath } from 'url';

// Definir __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import db from './config/db.js';

import authRoutes from './rotas/auth.js';
// import routes from './rotas/routes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rotas de autenticação
app.use('/api/auth', authRoutes);
// app.use('/api/routes', routes);

// Rota para servir o arquivo HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando, acesse: http://localhost:${PORT}`);
});
