const db = require('../config/db'); // Importa a conexão com o banco de dados

const express = require('express');
const router = express.Router();
const walksControllers = require('../controles/dogwalkerController');

// Função para obter todos os DogWalkers
const getALLWalks = (req, res) => { 
    db.query('SELECT * FROM dogwalker', (err, results) => { 
    if (err) { 
    console.error('Erro ao obter DogWalker:', err); 
    res.status(500).send('Erro ao obter DogWalker'); 
    return; 
    } 
    res.json(results); 
    }); 
    }; 

const addWalks = (req, res) => {
    const{id, nome, usuario, email, senha, telefone, atuacao} = req.body;

 // Verifica se o animal já está cadastrado =? AND
 db.query(
    'SELECT * FROM dogwalker WHERE id=? AND nome=?  AND usuario=? AND email=? AND senha=? AND telefone=? AND atuacao=?',
    [id, nome, usuario, email, senha, telefone, atuacao],
    (err, result) => {
        if (err) {
            console.error('ERRO AO VERIFICAR DogWalker', err);
            res.status(500).send('ERRO AO VERIFICAR DogWalker');
            return;
        }
        if (result.length > 0) {
            res.status(400).send('DogWalker já cadastrado');
            return;
        }

    db.query ('INSERT INTO dogwalker (id, nome, usuario, email, senha, telefone, atuacao) VALUES(?, ?, ?, ?, ?, ?, ?)',
    [id, nome, usuario, email, senha, telefone, atuacao],
    (err,results) => {
        if (err) {
            console.error('Erro ao adicionar DogWalker:',err);
            res.status(500).send('Erro ao adicionar DogWalker');
            return;
        }
        res.status(201).send('DogWalker adicionado com sucesso');
    }
);
}
);
};


const updateWalksPATCH = (req, res) => { 
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
      `UPDATE dogwalker SET ${query.join(', ')} WHERE id = ?`, 
      values, 
      (err, results) => { 
        if (err) { 
          console.error('Erro ao atualizar DogWalker:', err); 
          res.status(500).send('Erro ao atualizar DogWalker'); 
          return; 
        } 
        res.send('DogWalker atualizado com sucesso'); 
      } 
    ); 
  }; 



  const deleteWalks = (req, res) => {
    const { id } = req.params;
    
    // Verificar se o ID foi fornecido e se é válido
    if (!id || isNaN(id)) {
        return res.status(400).send('ID inválido ou não fornecido');
    }

    // Executar a query para deletar o DogWalker
    db.query('DELETE FROM dogwalker WHERE ID = ?', [id], (err, result) => {
        if (err) {
            console.error('Erro ao deletar DogWalker:', err);
            return res.status(500).send('Erro ao deletar DogWalker');
        }

        // Verificar se o DogWalker foi encontrado e deletado
        if (result.affectedRows === 0) {
            return res.status(404).send('DogWalker não encontrado');
        }

        res.send('DogWalker deletado com sucesso');
    });
};

      

       
    
    module.exports = { 
        getALLWalks,
        addWalks,
        updateWalksPATCH,
        deleteWalks
    };