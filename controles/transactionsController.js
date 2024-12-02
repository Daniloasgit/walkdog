const db = require('../config/db'); // Importa a conexão com o banco de dados

// Função para obter todas as transações 
const getALLTransactions = (req, res) => { 
    db.query('SELECT * FROM clientes', (err, results) => { 
    if (err) { 
    console.error('Erro ao obter clientes:', err); 
    res.status(500).send('Erro ao obter clientes'); 
    return; 
    } 
    res.json(results); 
    }); 
    }; 
    module.exports = { 
    getALLTransactions
    };