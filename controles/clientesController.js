const db = require('../config/db'); // Importa a conexão com o banco de dados
const express = require('express');
const router = express.Router();

// Função para obter todos os clientes
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
const addClientes = (req, res) => {
    const { id, nome, usuario, email, senha, telefone, atuacao } = req.body;

    // Verifica se o cliente já está cadastrado
    db.query(
        'SELECT * FROM clientes WHERE email=?',
        [email],
        (err, result) => {
            if (err) {
                console.error('Erro ao verificar Cliente:', err);
                res.status(500).send('Erro ao verificar Cliente');
                return;
            }
            if (result.length > 0) {
                res.status(400).send('Cliente já cadastrado');
                return;
            }

            // Se não existir, adiciona o cliente
            db.query(
                'INSERT INTO clientes (id, nome, usuario, email, senha, telefone, atuacao) VALUES(?, ?, ?, ?, ?, ?, ?)',
                [id, nome, usuario, email, senha, telefone, atuacao],
                (err, results) => {
                    if (err) {
                        console.error('Erro ao adicionar Cliente:', err);
                        res.status(500).send('Erro ao adicionar cliente');
                        return;
                    }
                    res.status(201).send('Cliente adicionado com sucesso');
                }
            );
        }
    );
};

// Associando as funções de controle às rotas
router.get('/clientes', getALLClientes);  // Rota para obter todos os clientes
router.post('/clientes', addClientes);    // Rota para adicionar clientes

// Exporta o router para ser usado no arquivo principal da aplicação
module.exports = router;
