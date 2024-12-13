const db = require('../config/db'); // Importa a conexão com o banco de dados

const express = require('express');
const router = express.Router();
const clientesController = require('../controles/clientesController');

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

const addClientes = (req, res) => {
    const{ id, nome, usuario, email, senha, telefone, atuacao } = req.body;

 // Verifica se o animal já está cadastrado =? AND
 db.query(
    'SELECT * FROM clientes WHERE id=? AND nome=? AND usuario=? AND email=? AND senha=? AND telefone=? AND atuacao=?',
    [id, nome, usuario, email, senha, telefone, atuacao],
    (err, result) => {
        if (err) {
            console.error('ERRO AO VERIFICAR Cliente', err);
            res.status(500).send('ERRO AO VERIFICAR Cliente');
            return;
        }
        if (result.length > 0) {
            res.status(400).send('Cliente já cadastrado');
            return;
        }

    db.query ('INSERT INTO clientes (id, nome, usuario, email, senha, telefone, atuacao) VALUES(?, ?, ?, ?, ?, ?, ?)',
    [id, nome, usuario, email, senha, telefone, atuacao],
    (err,results) => {
        if (err) {
            console.error('Erro ao adicionar Cliente:',err);
            res.status(500).send('Erro ao adicionar clientes');
            return;
        }
        res.status(201).send('Cliente adicionado com sucesso');
    }
);
}
);
};


const updateClientesPatch = (req, res) => { 
    const { id } = req.params; 
    const fields = req.body; 
    const query = []; 
    const values = []; 
   
    for (const [key, value] of Object.entries(fields)) { 
      query.push(`${key} = ?`); 
      values.push(value); 
    } 
   
    values.push(id); 
   
    db.query( 
      `UPDATE clientes SET ${query.join(', ')} WHERE id = ?`, 
      values, 
      (err, results) => { 
        if (err) { 
          console.error('Erro ao atualizar cliente:', err); 
          res.status(500).send('Erro ao atualizar cliente'); 
          return; 
        } 
        res.send('Cliente atualizado com sucesso'); 
      } 
    ); 
  }; 



  const deleteClientes = (req, res) => {
    const { id } = req.params;
    
    // Verificar se o ID foi fornecido e se é válido
    if (!id || isNaN(id)) {
        return res.status(400).send('ID inválido ou não fornecido');
    }

    // Executar a query para deletar o cliente
    db.query('DELETE FROM clientes WHERE ID = ?', [id], (err, result) => {
        if (err) {
            console.error('Erro ao deletar cliente:', err);
            return res.status(500).send('Erro ao deletar cliente');
        }

        // Verificar se o cliente foi encontrado e deletado
        if (result.affectedRows === 0) {
            return res.status(404).send('Cliente não encontrado');
        }

        res.send('Cliente deletado com sucesso');
    });
};

      

       
    
    module.exports = { 
        getALLClientes,
        addClientes,
        updateClientesPatch,
        deleteClientes
    };